import { SITE_URL } from '../consts';

// IndexNow API configuration
const INDEXNOW_API_KEY = '071255a674914890a34008a19a21abbe';
const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow';

/**
 * Submit URLs to IndexNow API for instant indexing
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<boolean>} - Success status
 */
export async function submitToIndexNow(urls) {
  if (!urls || urls.length === 0) {
    return false;
  }

  try {
    const payload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_API_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_API_KEY}.txt`,
      urlList: urls
    };

    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`Successfully submitted ${urls.length} URLs to IndexNow`);
      return true;
    } else {
      console.error('IndexNow submission failed:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error submitting to IndexNow:', error);
    return false;
  }
}

/**
 * Submit a single URL to IndexNow
 * @param {string} url - URL to submit
 * @returns {Promise<boolean>} - Success status
 */
export async function submitUrlToIndexNow(url) {
  return submitToIndexNow([url]);
}

/**
 * Submit all site URLs to IndexNow (for initial submission)
 * @returns {Promise<boolean>} - Success status
 */
export async function submitAllUrlsToIndexNow() {
  try {
    // Import here to avoid circular dependencies
    const { getCollection } = await import('astro:content');
    const { CATEGORIES } = await import('../consts');
    
    const blogPosts = await getCollection('blog');
    const questions = await getCollection('questions');

    // Static pages
    const staticUrls = [
      `${SITE_URL}/`,
      `${SITE_URL}/blog`,
      `${SITE_URL}/questions`,
      `${SITE_URL}/category`,
      `${SITE_URL}/about`,
      `${SITE_URL}/contact`,
      `${SITE_URL}/privacy-policy`,
    ];

    // Category URLs
    const categoryUrls = CATEGORIES.map(category => 
      `${SITE_URL}/category/${category.toLowerCase().replace(/\s+/g, '-')}`
    );

    // Blog post URLs
    const blogUrls = blogPosts.map(post => 
      `${SITE_URL}/blog/${post.data.slug || post.id}`
    );

    // Question URLs
    const questionUrls = questions.map(question => 
      `${SITE_URL}/questions/${question.data.slug || question.id}`
    );

    // Combine all URLs
    const allUrls = [
      ...staticUrls,
      ...categoryUrls,
      ...blogUrls,
      ...questionUrls
    ];

    // Submit in batches of 10,000 URLs (IndexNow limit)
    const batchSize = 10000;
    let success = true;

    for (let i = 0; i < allUrls.length; i += batchSize) {
      const batch = allUrls.slice(i, i + batchSize);
      const result = await submitToIndexNow(batch);
      if (!result) {
        success = false;
      }
    }

    return success;
  } catch (error) {
    console.error('Error submitting all URLs to IndexNow:', error);
    return false;
  }
}
