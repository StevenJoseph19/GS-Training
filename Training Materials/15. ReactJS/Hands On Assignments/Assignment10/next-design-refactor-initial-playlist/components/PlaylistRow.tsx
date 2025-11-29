
'use client';
import type { Playlist } from '@/lib/types';

export default function PlaylistRow({ playlist, onSelect }: { playlist: Playlist; onSelect: (p: Playlist) => void }) {
  return (
    <tr onClick={() => onSelect(playlist)} data-testid={`playlist-row-${playlist.id}`} style={{ cursor: 'pointer' }}>
      <td>{playlist.name}</td>
      <td>{playlist.owner}</td>
    </tr>
  );
}
