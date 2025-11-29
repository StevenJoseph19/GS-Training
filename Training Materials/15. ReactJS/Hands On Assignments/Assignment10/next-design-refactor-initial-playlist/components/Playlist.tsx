
'use client';
import Image from 'next/image';
import { defaultCover } from '@/helpers/defaultCover';
import type { Playlist } from '@/lib/types';
import Tracks from '@/components/Tracks';

export default function Playlist({ playlist, onBack }: { playlist: Playlist; onBack: () => void }) {
  const src = playlist.cover ? `/covers/${playlist.cover}` : defaultCover;
  return (
    <section>
      <button onClick={onBack} aria-label="back">← Back to list</button>
      <h2>{playlist.name}</h2>
      <p>Owner: {playlist.owner}</p>
      <Image src={src} alt={`${playlist.name}`} width={300} height={200} />

      {/* INTENTIONAL DESIGN SMELL: Tracks mixes listing + add */}
      <Tracks playlist={playlist} />
    </section>
  );
}
