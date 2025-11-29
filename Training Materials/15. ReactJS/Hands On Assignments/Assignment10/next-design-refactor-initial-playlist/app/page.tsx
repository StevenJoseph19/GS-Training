
'use client';
import { useState } from 'react';
import Banner from '@/components/Banner';
import PlaylistList from '@/components/PlaylistList';
import Playlist from '@/components/Playlist';
import type { Playlist as PlaylistType } from '@/lib/types';

/**
 * Initial implementation BEFORE refactoring.
 * - Root owns selected playlist and toggles list/details.
 * - Other intentional design issues are present (see README) to refactor.
 */
export default function Page() {
  const [selected, setSelected] = useState<PlaylistType | undefined>();
  return (
    <main>
      <Banner title="PlayListr" subtitle="Click a playlist to view tracks" />
      {selected ? (
        <Playlist playlist={selected} onBack={() => setSelected(undefined)} />
      ) : (
        <PlaylistList onSelect={setSelected} />
      )}
    </main>
  );
}
