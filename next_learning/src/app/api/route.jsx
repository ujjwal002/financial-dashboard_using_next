
// pages/api/your-api-endpoint.js

import { NextResponse } from 'next/server';

export async function  GET(){
  return NextResponse.json({
    success:"true",
  })
}
