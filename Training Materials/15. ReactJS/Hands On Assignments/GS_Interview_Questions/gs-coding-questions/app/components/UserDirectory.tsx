/**
 * PROBLEM STATEMENT
 * -----------------
 * Create a reusable React Class Component named `UserDirectory` that fetches
 * and displays a list of users from a remote API: 'https://jsonplaceholder.typicode.com/users'.
 *
 * The component must:
 * 1. Initialize and manage local state for the user data (`data`), loading status (`loading`), and any fetch errors (`error`).
 * 2. Perform the data fetching operation immediately after the component mounts using the `componentDidMount` lifecycle method.
 * 3. Display a "Loading..." message while the data is being fetched.
 * 4. Display an error message if the fetch fails (e.g., network error or bad HTTP status).
 * 5. Display the fetched user names in an unordered list (`<ul>`).
 * 6. **Crucially, implement proper cleanup** using the `componentWillUnmount` lifecycle method to cancel the ongoing fetch request via `AbortController`. This prevents memory leaks and potential "setState on unmounted component" warnings.
 *
 * This component serves as a practical example demonstrating data fetching and state management
 * using traditional React **Class Components** and their associated lifecycle methods.
 */
