import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { lang } = await request.json();
    if (!lang || typeof lang !== 'string') {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set('lang', lang, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error setting language cookie:', error.message);
    } else {
      console.error('Error setting language cookie:', error);
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
