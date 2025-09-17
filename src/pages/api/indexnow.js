import { submitToIndexNow, submitAllUrlsToIndexNow} from '../../utils/indexnow.js';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { urls, submitAll } = body;

    let result;
    if (submitAll) {
      result = await submitAllUrlsToIndexNow();
    } else if (urls && Array.isArray(urls)) {
      result = await submitToIndexNow(urls);
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid request. Provide either "urls" array or "submitAll: true"' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      success: result,
      message: result ? 'URLs submitted successfully' : 'Failed to submit URLs'
    }), {
      status: result ? 200 : 500,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('IndexNow API error:', error);
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
    message: 'IndexNow API endpoint',
    usage: {
      POST: {
        'Submit specific URLs': { urls: ['url1', 'url2'] },
        'Submit all URLs': { submitAll: true }
      }
    }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
