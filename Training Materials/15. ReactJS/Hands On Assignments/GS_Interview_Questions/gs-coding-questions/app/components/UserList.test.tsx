//Keep UserList.tsx as before.
// Run npm i --force --legacy-peer-deps
// if any issue

// Write unit tests for UserList component using Jest + React Testing Library.

// Cover 3 scenarios:

// 1. Basic render → "Loading..." shown initially

// 2. After fetch success → user names are displayed

// 3. Handle fetch error → error message shown
import { render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";

import UserList from "./UserList";

beforeEach(() => {
  jest.resetAllMocks();
});

test("shows loading initially", () => {
  global.fetch = jest.fn(
    () => new Promise(() => {}) // never resolves
  ) as jest.Mock;

  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders users after successful fetch", async () => {
  const mockUsers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockUsers),
    })
  ) as jest.Mock;

  render(<UserList />);

  for (const user of mockUsers) {
    expect(
      await screen.findByText((content) => content.includes(user.name))
    ).toBeInTheDocument();
  }
});

test("renders error message on fetch failure", async () => {
  global.fetch = jest.fn(() =>
    Promise.reject(new Error("Network error"))
  ) as jest.Mock;

  render(<UserList />);

  expect(
    await screen.findByText((text) => text.includes("Failed to load"))
  ).toBeInTheDocument();
});
