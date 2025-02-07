import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = await cookies();

  const lang = cookieStore.get('lang')?.value || 'ru';
  return NextResponse.json({ lang });
}
