
'use client';
import { useEffect, useState } from 'react';
import PlaylistRow from '@/components/PlaylistRow';
import type { Playlist } from '@/lib/types';

/**
 * INTENTIONAL DESIGN SMELL:
 * - PlaylistList both LISTS playlists AND shows an "Add Playlist" button.
 *   This violates single responsibility (listing vs adding).
 *   Refactor will move adding into a dedicated component.
 */
export default function PlaylistList({ onSelect }: { onSelect: (p: Playlist) => void }) {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/playlists');
      const data = await res.json();
      setPlaylists(data);
    })();
  }, []);

  return (
    <section>
      <div style={{ margin: '1rem 0' }}>
        {/* TODO (refactor): Extract AddPlaylist into its own component */}
        <button aria-label="add-playlist">Add Playlist</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {playlists.map((p) => (
            <PlaylistRow key={p.id} playlist={p} onSelect={onSelect} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
