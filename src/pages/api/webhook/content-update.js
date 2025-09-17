import { submitAllUrlsToIndexNow } from "../../../utils/indexnow";
import { SITE_URL } from "../../../consts";

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { type, slug, action } = body;

    // Validate the request
    if (!type || !slug || !action) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields: type, slug, action' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Only submit for 'create' or 'update' actions
    if (!['create', 'update'].includes(action)) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'No submission needed for this action' 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Construct the URL based on content type
    let url;
    switch (type) {
      case 'blog':
        url = `${SITE_URL}/blog/${slug}`;
        break;
      case 'question':
        url = `${SITE_URL}/questions/${slug}`;
        break;
      default:
        return new Response(JSON.stringify({ 
          success: false, 
          error: 'Invalid content type' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }

    // Submit to IndexNow
    const result = await submitUrlToIndexNow(url);

    return new Response(JSON.stringify({ 
      success: result,
      url: url,
      message: result ? 'URL submitted to IndexNow successfully' : 'Failed to submit URL to IndexNow'
    }), {
      status: result ? 200 : 500,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({
    message: 'Content update webhook for IndexNow',
    usage: {
      POST: {
        description: 'Submit content updates to IndexNow',
        payload: {
          type: 'blog | question',
          slug: 'content-slug',
          action: 'create | update | delete'
        }
      }
    }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
