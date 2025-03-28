'use server';
import { createClient } from 'redis';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    const redis = createClient({ url: process.env.REDIS_URL });
    redis.on('error', (err) => console.error('Redis Client Error:', err));
    await redis.connect();

    const body = await request.json();
    const { email, feedback } = body;

    if (!email || !feedback) {
      return new NextResponse(JSON.stringify({ message: 'Invalid input' }), {
        status: 400,
      });
    }

    // Store feedback in Redis
    const feedbackId = crypto.randomUUID();
    const mergedContent = `Email: ${email}\nFeedback: ${feedback}`;
    await redis.set(`feedback-${feedbackId}`, mergedContent);

    await redis.disconnect();

    // Return a success response
    return new NextResponse(
      JSON.stringify({ message: 'Feedback stored successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error connecting to Redis:', error);

    // Return an error response
    return new NextResponse(
      JSON.stringify({ message: 'Failed to store feedback.' }),
      { status: 500 }
    );
  }
};
