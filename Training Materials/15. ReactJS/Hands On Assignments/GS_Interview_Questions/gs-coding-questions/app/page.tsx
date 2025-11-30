// app/page.tsx (Final Update with ParentChildCommunication)

"use client";

import React from "react";
// --- Component Imports (Fixed to relative paths) ---
// import UserList from "./components/UserList";
// import UserDirectory from "./components/UserDirectory";
// import SearchBox from "./components/SearchBox";
import MemoizationChallenge from "./components/MemoizationChallenge";
import Stopwatch from "./components/Stopwatch";
import PromiseAllChallenge from "./components/PromiseAllChallenge";
import StarRating from "./components/StarRating";
import CharacterCounter from "./components/CharacterCounter";
import InfiniteLoopChallenge from "./components/InfiniteLoopChallenge";
import ReferentialEqualityChallenge from "./components/ReferentialEqualityChallenge";
import MountEffectChallenge from "./components/MountEffectChallenge";
import ParentChildCommunication from "./components/ParentChildCommunication"; // <-- NEW IMPORT

// --- Type Definition ---
type View =
  | "users-fn"
  | "users-class"
  | "search"
  | "memo-challenge"
  | "stopwatch"
  | "promise-all"
  | "star-rating"
  | "char-counter"
  | "loop-challenge"
  | "ref-equality-challenge"
  | "mount-only-challenge"
  | "parent-child-comm"; // <-- NEW VIEW TYPE

export default function Page() {
  const [view, setView] = React.useState<View>("parent-child-comm"); // <-- SET DEFAULT TO NEW CHALLENGE

  const isActive = (v: View) => (view === v ? "underline" : "none");

  return (
    <main style={{ padding: "20px" }}>
      <h1>React Interview Demo Hub</h1>
      <nav style={{ margin: "12px 0" }} aria-label="view switcher">
        {/* ... (Existing buttons: users-fn, users-class, search, memo-challenge, stopwatch, promise-all, star-rating, char-counter, loop-challenge, ref-equality-challenge) ... */}

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
          UserList
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
          UserDirectory
        </button>

        <button
          type="button"
          onClick={() => setView("search")}
          style={{
            marginRight: 12,
            textDecoration: isActive("search"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "search"}
        >
          Debounced Search
        </button>

        <button
          type="button"
          onClick={() => setView("memo-challenge")}
          style={{
            marginRight: 12,
            textDecoration: isActive("memo-challenge"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "memo-challenge"}
        >
          Memoization
        </button>

        <button
          type="button"
          onClick={() => setView("stopwatch")}
          style={{
            marginRight: 12,
            textDecoration: isActive("stopwatch"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "stopwatch"}
        >
          Stopwatch
        </button>

        <button
          type="button"
          onClick={() => setView("promise-all")}
          style={{
            marginRight: 12,
            textDecoration: isActive("promise-all"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "promise-all"}
        >
          Promise.all
        </button>

        <button
          type="button"
          onClick={() => setView("star-rating")}
          style={{
            marginRight: 12,
            textDecoration: isActive("star-rating"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "star-rating"}
        >
          Star Rating
        </button>

        <button
          type="button"
          onClick={() => setView("char-counter")}
          style={{
            marginRight: 12,
            textDecoration: isActive("char-counter"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "char-counter"}
        >
          Character Counter
        </button>

        <button
          type="button"
          onClick={() => setView("loop-challenge")}
          style={{
            marginRight: 12,
            textDecoration: isActive("loop-challenge"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "loop-challenge"}
        >
          Infinite Loop Bug
        </button>

        <button
          type="button"
          onClick={() => setView("ref-equality-challenge")}
          style={{
            marginRight: 12,
            textDecoration: isActive("ref-equality-challenge"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "ref-equality-challenge"}
        >
          Referential Equality Bug
        </button>

        <button
          type="button"
          onClick={() => setView("mount-only-challenge")}
          style={{
            marginRight: 12,
            textDecoration: isActive("mount-only-challenge"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "mount-only-challenge"}
        >
          Mount Only Effect
        </button>

        {/* <-- NEW BUTTON --> */}
        <button
          type="button"
          onClick={() => setView("parent-child-comm")}
          style={{
            textDecoration: isActive("parent-child-comm"),
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "1rem",
          }}
          aria-pressed={view === "parent-child-comm"}
        >
          Parent-Child Comm
        </button>
      </nav>
      <hr />
      {/* --- Render based on selected view --- */}
      {/* {view === "users-fn" && <UserList />}
      {view === "users-class" && <UserDirectory />}
      {view === "search" && <SearchBox />} */}
      {view === "promise-all" && <PromiseAllChallenge />}
      {view === "memo-challenge" && <MemoizationChallenge />}
      {view === "star-rating" && <StarRating />}
      {view === "stopwatch" && <Stopwatch />}
      {view === "char-counter" && <CharacterCounter limit={140} />}
      {view === "loop-challenge" && <InfiniteLoopChallenge />}
      {view === "mount-only-challenge" && <MountEffectChallenge />}
      {view === "ref-equality-challenge" && <ReferentialEqualityChallenge />}
      {view === "parent-child-comm" && <ParentChildCommunication />}{" "}
      {/* <-- NEW RENDER LOGIC */}
    </main>
  );
}
