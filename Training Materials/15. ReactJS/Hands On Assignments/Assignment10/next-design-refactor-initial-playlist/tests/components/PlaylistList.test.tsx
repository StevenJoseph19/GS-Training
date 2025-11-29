import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/page";

beforeEach(() => {
  // mock playlists fetch
  // @ts-ignore
  global.fetch = jest.fn(async () => ({
    ok: true,
    json: async () => [
      { id: 1, name: "Morning Run", owner: "Stephen" },
      { id: 2, name: "Focus Work", owner: "Team FE" },
    ],
  }));
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("shows AddPlaylist control (via aria-label) and list rows (pre-refactor)", async () => {
  render(<Page />);

  // rows rendered
  await waitFor(() =>
    expect(screen.getByTestId("playlist-row-1")).toBeInTheDocument()
  );

  // Add control is in PlaylistList for stub (accessible name is aria-label)
  expect(
    screen.getByRole("button", { name: /add-playlist/i })
  ).toBeInTheDocument();
});
