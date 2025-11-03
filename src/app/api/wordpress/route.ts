import { NextResponse } from 'next/server';

export const revalidate = 600; // cache 10 minutes for stability

const BASE_URL = 'https://keyobarbecue.com/wp-json/wp/v2';
const ALLOWED_ENDPOINTS = new Set(['posts']);
const ALLOWED_PARAMS = new Set(['per_page', 'page', '_embed', 'search', 'categories', 'slug']);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint') || 'posts';

  if (!ALLOWED_ENDPOINTS.has(endpoint)) {
    return NextResponse.json(
      { success: false, error: 'Invalid endpoint' },
      { status: 400 }
    );
  }

  const targetUrl = new URL(`${BASE_URL}/${endpoint}`);
  for (const [key, value] of searchParams.entries()) {
    if (key === 'endpoint') continue;
    if (ALLOWED_PARAMS.has(key) && value) {
      targetUrl.searchParams.set(key, value);
    }
  }

  try {
    const res = await fetch(targetUrl.toString(), {
      headers: { 'Accept': 'application/json' },
      // Avoid sending cookies to upstream
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: 'Upstream error', status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Proxy error' },
      { status: 500 }
    );
  }
}