
'use client';

/**
 * Banner (STUB)
 * -----------------
 * Displays the application title/subtitle.
 *
 * ASSIGNMENT TODOs:
 * 1) Render a semantic <header> with an <h1> and optional subtitle (<p>).
 * 2) Add basic styling (inline or CSS) similar to the finished app.
 * 3) Make sure banner has role "banner" implicitly by using <header>.
 */
export default function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  // TODO: Return a header element with title and optional subtitle
  return (
    <header>
      {/* TODO: Replace with real implementation */}
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}
