// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import SearchBox from "./SearchBox";

// jest.useFakeTimers();

// describe("SearchBox Component", () => {
//   test("renders input and initial list of items", () => {
//     render(<SearchBox />);
//     expect(screen.getByPlaceholderText(/search fruits/i)).toBeInTheDocument();
//     expect(screen.getByText("apple")).toBeInTheDocument();
//     expect(screen.getByText("banana")).toBeInTheDocument();
//     expect(screen.getByText("mango")).toBeInTheDocument();
//   });

//   test("filters items based on debounced input", async () => {
//     render(<SearchBox />);
//     const input = screen.getByPlaceholderText(/search fruits/i);

//     await userEvent.type(input, "man");

//     // Fast-forward debounce timer
//     jest.advanceTimersByTime(500);
//     // jest.runAllTimers();

//     await waitFor(() => {
//       expect(screen.getByText("mango")).toBeInTheDocument();
//       expect(screen.queryByText("apple")).not.toBeInTheDocument();
//       expect(screen.queryByText("banana")).not.toBeInTheDocument();
//     });
//   }, 10000);

//   test("shows all items when input is cleared", async () => {
//     render(<SearchBox />);
//     const input = screen.getByPlaceholderText(/search fruits/i);

//     // Filter first
//     await userEvent.type(input, "gra");
//     jest.advanceTimersByTime(500);
//     // jest.runAllTimers();a

//     await waitFor(() => {
//       expect(screen.getByText("grape")).toBeInTheDocument();
//       expect(screen.queryByText("banana")).not.toBeInTheDocument();
//     });

//     // Clear input
//     await userEvent.clear(input);
//     jest.advanceTimersByTime(500);
//     // jest.runAllTimers();

//     await waitFor(() => {
//       expect(screen.getByText("apple")).toBeInTheDocument();
//       expect(screen.getByText("banana")).toBeInTheDocument();
//       expect(screen.getByText("grape")).toBeInTheDocument();
//     });
//   }, 10000);
// });

// app/components/SearchBox.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

describe("SearchBox Component", () => {
  test("renders input and initial list of items", () => {
    render(<SearchBox />);
    expect(screen.getByPlaceholderText(/search fruits/i)).toBeInTheDocument();
    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(screen.getByText("banana")).toBeInTheDocument();
    expect(screen.getByText("mango")).toBeInTheDocument();
  });

  test("filters items based on debounced input", async () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText(/search fruits/i);

    const user = userEvent.setup(); // no fake timers
    await user.type(input, "man");

    await waitFor(() => {
      expect(screen.getByText("mango")).toBeInTheDocument();
      expect(screen.queryByText("apple")).not.toBeInTheDocument();
      expect(screen.queryByText("banana")).not.toBeInTheDocument();
    });
  });

  test("shows all items when input is cleared", async () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText(/search fruits/i);

    const user = userEvent.setup();
    await user.type(input, "gra");

    await waitFor(() => {
      expect(screen.getByText("grape")).toBeInTheDocument();
      expect(screen.queryByText("banana")).not.toBeInTheDocument();
    });

    await user.clear(input);

    await waitFor(() => {
      expect(screen.getByText("apple")).toBeInTheDocument();
      expect(screen.getByText("banana")).toBeInTheDocument();
      expect(screen.getByText("grape")).toBeInTheDocument();
    });
  });
});
