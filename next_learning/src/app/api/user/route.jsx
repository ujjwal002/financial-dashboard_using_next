// pages/api/your-api-endpoint.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    return NextResponse.json({
      success: 'post',
      data: data,
    });
  } catch (error) {
    console.error('Error processing JSON request:', error);

    return NextResponse.json({
      error: 'Failed to process JSON request',
    });
  }
}
