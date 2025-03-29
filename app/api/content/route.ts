// app/api/content/route.ts
import { client } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const query = searchParams.get('query')

  try {
    const content = await client.fetch(query || `*[_type == $type]`, { type })
    return NextResponse.json(content)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}