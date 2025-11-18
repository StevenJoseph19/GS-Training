import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "@/app/page";
import { HouseList } from "@/app/components/HouseList";

describe("React Fundamentals Lab (Next.js + TS)", () => {
  test("renders header with provided title", () => {
    render(<Page />);
    const header = screen.getByTestId("app-header");
    expect(header).toBeInTheDocument();
    // Title should contain "Globomantics"
    expect(header).toHaveTextContent(/globomantics/i);
  });

  test("shows list of houses and can navigate to details", () => {
    render(<Page />);

    // list items exist
    const house2 = screen.getByTestId("house-2");
    expect(house2).toBeInTheDocument();

    // navigate to details
    fireEvent.click(house2);

    expect(screen.getByText(/house details/i)).toBeInTheDocument();
    expect(screen.getByText(/44 Rosewood Lane/)).toBeInTheDocument();
    expect(screen.getByText(/Austin/)).toBeInTheDocument();
    expect(screen.getByText(/\$?\s*650000/)).toBeInTheDocument();

    // Favorite increments
    const favCount = screen.getByTestId("fav-count");
    expect(favCount).toHaveTextContent("0");
    fireEvent.click(screen.getByTestId("favorite-btn"));
    expect(favCount).toHaveTextContent("1");

    // Back to list
    fireEvent.click(screen.getByText(/^back$/i));
    expect(screen.getByTestId("house-1")).toBeInTheDocument();
  });

  test("memoized StaticBadge does not re-render on unrelated parent updates", () => {
    render(<Page />);

    const badgeCount = () => screen.getByTestId("badge-renders");
    expect(badgeCount()).toHaveTextContent("1");

    const tickBtn = screen.getByTestId("tick");
    fireEvent.click(tickBtn);
    fireEvent.click(tickBtn);
    fireEvent.click(tickBtn);

    // Should remain "1" if memoized correctly and props unchanged
    expect(badgeCount()).toHaveTextContent("1");

    expect(screen.getByTestId("ticks").textContent).toBe("3");
  });

  test("HouseList handles empty array gracefully", () => {
    render(<HouseList houses={[]} onSelect={() => {}} />);
    expect(screen.getByTestId("empty")).toBeInTheDocument();
  });
});
