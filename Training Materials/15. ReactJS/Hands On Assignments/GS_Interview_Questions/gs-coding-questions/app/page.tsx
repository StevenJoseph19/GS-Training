"use client";

import React from "react";
import UserList from "@/app/components/UserList"; // functional component
import UserDirectory from "@/app/components/UserDirectory"; // class component
import SearchBox from "@/app/components/SearchBox";

type View = "users-fn" | "users-class" | "search";

export default function Page() {
  const [view, setView] = React.useState<View>("users-fn");

  const isActive = (v: View) => (view === v ? "underline" : "none");

  return (
    <main style={{ padding: "20px" }}>
      <h1>Hello React + TS</h1>

      {/* Buttons to toggle views */}
      <nav style={{ margin: "12px 0" }} aria-label="view switcher">
        <button
          type="button"
          onClick={() => setView("users-fn")}
          style={{
            marginRight: 12,
            textDecoration: isActive("users-fn"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "users-fn"}
        >
          Show UserList (Functional)
        </button>

        <button
          type="button"
          onClick={() => setView("users-class")}
          style={{
            marginRight: 12,
            textDecoration: isActive("users-class"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "users-class"}
        >
          Show UserDirectory (Class)
        </button>

        <button
          type="button"
          onClick={() => setView("search")}
          style={{
            textDecoration: isActive("search"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "search"}
        >
          Show SearchBox
        </button>
      </nav>

      {/* Render based on selected view */}
      {view === "users-fn" && <UserList />}
      {view === "users-class" && <UserDirectory />}
      {view === "search" && <SearchBox />}
    </main>
  );
}
