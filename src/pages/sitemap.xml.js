import { getCollection } from 'astro:content';
import { SITE_URL, CATEGORIES } from '../consts';

export async function GET() {
  // Get all blog posts and questions
  const blogPosts = await getCollection('blog');
  const questions = await getCollection('questions');

  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: 'blog', priority: '0.9', changefreq: 'daily' },
    { url: 'questions', priority: '0.9', changefreq: 'daily' },
    { url: 'category', priority: '0.8', changefreq: 'weekly' },
    { url: 'about', priority: '0.7', changefreq: 'monthly' },
    { url: 'contact', priority: '0.6', changefreq: 'monthly' },
    { url: 'privacy-policy', priority: '0.5', changefreq: 'yearly' },
  ];

  // Category pages
  const categoryPages = CATEGORIES.map(category => ({
    url: `category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  // SSC Exams subcategories
  const sscSubcategories = [
    'ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-cpo', 'ssc-gd', 'ssc-je'
  ].map(slug => ({
    url: `category/ssc-exams/${slug}`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // Banking Exams subcategories
  const bankingSubcategories = [
    'ibps-po'
  ].map(slug => ({
    url: `category/banking-exams/${slug}`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // Syllabus pages
  const syllabusPages = [
    'category/ssc-exams/ssc-cgl/syllabus',
    'category/ssc-exams/ssc-chsl/syllabus',
    'category/ssc-exams/ssc-mts/syllabus',
    'category/ssc-exams/ssc-gd/syllabus',
    'category/ssc-exams/ssc-je/syllabus',
    'category/banking-exams/ibps-po/syllabus'
  ].map(url => ({
    url,
    priority: '0.6',
    changefreq: 'monthly'
  }));

  // Blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `blog/${post.data.slug || post.id}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: post.data.updatedDate || post.data.pubDate
  }));

  // Question pages
  const questionPages = questions.map(question => ({
    url: `questions/${question.data.slug || question.id}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: question.data.updatedDate || question.data.pubDate
  }));

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...sscSubcategories,
    ...bankingSubcategories,
    ...syllabusPages,
    ...blogPages,
    ...questionPages
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}/${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>${page.lastmod ? `
    <lastmod>${page.lastmod.toISOString()}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
