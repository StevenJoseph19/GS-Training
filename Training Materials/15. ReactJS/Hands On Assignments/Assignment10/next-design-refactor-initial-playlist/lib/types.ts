
export type Playlist = {
  id: number;
  name: string;
  owner: string;
  cover?: string;
};

export type Track = {
  id: number;
  playlistId: number;
  title: string;
  artist: string;
  duration: number; // seconds
};
