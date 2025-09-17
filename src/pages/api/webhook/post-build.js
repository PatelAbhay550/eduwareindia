import { submitAllUrlsToIndexNow } from "../../../utils/indexnow";

export async function POST({ request }) {
  try {
    // Optional: Add authentication/security check
    const authHeader = request.headers.get('authorization');
    const validToken = 'your-build-hook-secret'; // Change this to a secure token
    
    if (authHeader !== `Bearer ${validToken}`) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Unauthorized' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Starting post-build IndexNow submission...');
    const result = await submitAllUrlsToIndexNow();

    return new Response(JSON.stringify({ 
      success: result,
      message: result ? 'All URLs submitted to IndexNow after build' : 'Failed to submit URLs after build',
      timestamp: new Date().toISOString()
    }), {
      status: result ? 200 : 500,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Post-build hook error:', error);
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
    message: 'Post-build hook for IndexNow submission',
    usage: {
      POST: {
        description: 'Submit all site URLs to IndexNow after deployment',
        headers: {
          'Authorization': 'Bearer your-build-hook-secret'
        }
      }
    }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
