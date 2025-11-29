
import { NextResponse } from 'next/server';

export async function GET() {
  const playlists = [
    { id: 1, name: 'Morning Run', owner: 'Stephen', cover: '' },
    { id: 2, name: 'Focus Work', owner: 'Team FE', cover: '' },
  ];
  return NextResponse.json(playlists);
}
