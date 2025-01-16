import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

interface LoginResponse {
  auth?: boolean;
  token?: string;
  success?: boolean;
  message: string;
}

export default async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = (await response.json()) as LoginResponse;

    // Await cookies() to get the cookies object and set the token
    const cookiesStore = await cookies();

    if (data?.auth && data.success && data.token) {
      cookiesStore.set('token', data.token, {
        secure: process.env.NODE_ENV === 'production', // Secure flag for production
        maxAge: 60 * 60 * 24 * 7, // Expire after 7 days
        path: '/',
      });

      return NextResponse.json({
        success: true,
        message: 'Login success',
        token: data.token,
      });
    }

    return NextResponse.json({
      success: false,
      message: data?.message || 'Authentication failed.',
      token: '', // Always return a token key for consistency
    });
  } catch (error: unknown) {
    const err = error as Error;

    return NextResponse.json({
      success: false,
      message: err.message || 'An unexpected error occurred.',
      token: '',
    });
  }
}
