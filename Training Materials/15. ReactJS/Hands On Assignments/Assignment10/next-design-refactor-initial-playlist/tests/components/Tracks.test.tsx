
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from '@/components/Playlist';

const playlist = { id: 5, name: 'Test Mix', owner: 'QA' } as any;

test('can add a track (initial unrefactored design)', async () => {
  render(<Playlist playlist={playlist} onBack={() => {}} />);

  // initial tracks should render
  expect(await screen.findByText('Sunrise')).toBeInTheDocument();

  // fill and add new track
  fireEvent.change(screen.getByLabelText('title'), { target: { value: 'New Track' } });
  fireEvent.change(screen.getByLabelText('artist'), { target: { value: 'Someone' } });
  fireEvent.change(screen.getByLabelText('duration'), { target: { value: '240' } });
  fireEvent.click(screen.getByLabelText('add-track'));

  // new track appears
  expect(screen.getByText('New Track')).toBeInTheDocument();
  expect(screen.getByText('Someone')).toBeInTheDocument();
  expect(screen.getByText('240')).toBeInTheDocument();
});
