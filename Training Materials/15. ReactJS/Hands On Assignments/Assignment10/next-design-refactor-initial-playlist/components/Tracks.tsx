
'use client';
import { useEffect, useState } from 'react';
import type { Playlist, Track } from '@/lib/types';

/**
 * Tracks (INITIAL, UNREFACTORED)
 * ------------------------------
 * Combined responsibilities:
 *  - Holds tracks state locally and simulates fetching.
 *  - Renders the list of tracks.
 *  - Contains the form to add a new track.
 *
 * Refactor target:
 *  - Extract <TrackList/> and <AddTrack/>.
 *  - Lift `tracks` state to <Playlist/>.
 *  - Use inverse data flow for adding a track.
 */
export default function Tracks({ playlist }: { playlist: Playlist }) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [newTrack, setNewTrack] = useState<Track>({ id: 0, playlistId: playlist.id, title: '', artist: '', duration: 0 });

  useEffect(() => {
    const initial: Track[] = [
      { id: 1, playlistId: playlist.id, title: 'Sunrise', artist: 'Aria', duration: 210 },
      { id: 2, playlistId: playlist.id, title: 'Deep Focus', artist: 'Noctis', duration: 180 },
    ];
    setTracks(initial);
  }, [playlist.id]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewTrack((prev) => ({
      ...prev,
      [name]: name === 'duration' ? parseInt(value || '0', 10) : value,
    }));
  }

  function onAdd() {
    const id = tracks.length ? Math.max(...tracks.map((t) => t.id)) + 1 : 1;
    const toAdd = { ...newTrack, id };
    setTracks((prev) => [...prev, toAdd]);
    setNewTrack({ id: 0, playlistId: playlist.id, title: '', artist: '', duration: 0 });
  }

  return (
    <section>
      <h3>Tracks</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration (sec)</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.artist}</td>
              <td>{t.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add track form (intentionally inside the same component) */}
      <div style={{ marginTop: '1rem' }}>
        <input aria-label="title" name="title" type="text" value={newTrack.title} onChange={onChange} placeholder="Title" />
        <input aria-label="artist" name="artist" type="text" value={newTrack.artist} onChange={onChange} placeholder="Artist" />
        <input aria-label="duration" name="duration" type="number" value={newTrack.duration} onChange={onChange} placeholder="Duration" />
        <button onClick={onAdd} aria-label="add-track">Add Track</button>
      </div>

      {/* TODO (refactor):
         - Extract list into <TrackList tracks={...}/>.
         - Extract form into <AddTrack playlist={...} onAdd={...}/>.
         - Lift `tracks` state to <Playlist/> and pass down via props.
         - Children call parent `addTrack` (inverse data flow).
       */}
    </section>
  );
}
