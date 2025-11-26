This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Create project with recommended defaults (TS, ESLint, Tailwind optional, App Router)

```bash
npx create-next-app@latest gs-coding-questions
```

```bash
npm i --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest --force --legacy-peer-deps

npm install --save-dev ts-jest

npm install --save-dev @testing-library/user-event
```

Using --force --legacy-peer-deps helps if your environment hits transient peer dependency conflicts.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Troubleshooting

Recursively remove the node_modules directory in PowerShell

```bash
Get-ChildItem -Path . -Recurse -Directory -Filter "node_modules" | Remove-Item -Recurse -Force
```

## Hook ↔ Lifecycle Cheat Sheet

State

```bash
useState → this.state + this.setState
Multiple useState calls (e.g., loading, error, data) → combined into one State shape
```

Mount-only side effects

```bash
useEffect(() => { /_ fetch _/ }, []) → componentDidMount
```

Cleanup (unmount)

```bash
return () => { /_ cleanup _/ } inside useEffect → componentWillUnmount
```

Updating after async work

```bash
setState in hooks (setData, setLoading, setError) → this.setState({ ... })
```

Refs/imperative handles

```bash
useRef() for mutable values (like AbortController) → instance fields (e.g., this.abortController)
```

## What is AbortController?

AbortController is a built-in browser API that gives you a way to cancel an ongoing asynchronous operation, like a fetch() request.

It creates an abort signal that you pass to fetch.
If you later call abortController.abort(), the fetch immediately stops and throws an AbortError.

## Why do we need it in React components?

Imagine this scenario:

Your component starts fetching data when it mounts.
Before the fetch finishes, the user navigates away (component unmounts).
The fetch completes and tries to update state (this.setState or setState in hooks).
React warns:
"Can't perform a React state update on an unmounted component."

This happens because the component is gone, but the async request still finished.

## Solution: Use AbortController to cancel the fetch when the component unmounts.

## What signal does

this.abortController.signal is an AbortSignal object.
Passing it to fetch tells the browser (or Next.js/Node runtime) “if this signal is aborted, cancel this request.”
When you later call this.abortController.abort():

The fetch promise rejects immediately with an AbortError.
The network activity is stopped (no more work, bandwidth, or parsing).
Your catch block can detect this and avoid setting error state, since this was an intentional cancel.

```bash
const response = await fetch(
  "https://jsonplaceholder.typicode.com/users",
  { signal: this.abortController.signal }
);
```

## Key details & edge cases

If you don’t pass a signal: fetch can’t be cancelled; it will resolve/reject normally whenever it finishes.
Reusing controllers: Use a new AbortController per request. Don’t reuse an aborted one—once aborted, its signal stays aborted.

## Multiple concurrent requests:

Create one controller per request, so you can cancel them independently.

## Error handling:

Always check for AbortError to avoid showing a failure message for an intentional cancel:

```bash
} catch (err) {
  if ((err as any)?.name === "AbortError") return;
  // ...real error handling
}
```

## Hook equivalent

```bash
useEffect(() => {
  const controller = new AbortController();
  (async () => {
    try {
      const res = await fetch(url, { signal: controller.signal });
      // ...
    } catch (err) {
      if ((err as any).name === "AbortError") return;
    }
  })();
  return () => controller.abort(); // cleanup
}, []);
```

Node/Next.js: The global fetch in modern Node (and Next.js app router) supports AbortController similarly to browsers. This makes it safe and idiomatic in your setup.

## TL;DR

Passing { signal: controller.signal } makes the request cancellable. Calling controller.abort() will immediately stop the fetch and reject with AbortError, letting you avoid state updates and wasted work when your component unmounts or when you start a new request.
