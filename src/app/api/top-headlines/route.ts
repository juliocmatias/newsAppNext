import { NextRequest, NextResponse } from "next/server";

import { NewsData } from "@/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const category = searchParams.get('category');

  try {
    const res = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us' + (category ? `&category=${category}` : ''),
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.DATA_API_KEY || 'YOUR_API_KEY',
          'X-Category': category || ''
        }
      }
    );
    const data = await res.json() as NewsData;
  
    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error in Request' });
  }
}
