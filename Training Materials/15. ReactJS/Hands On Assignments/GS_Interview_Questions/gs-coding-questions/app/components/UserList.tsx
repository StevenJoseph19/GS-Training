/**
 * PROBLEM STATEMENT
 * -----------------
 * Create a React Functional Component named `UserList` that performs asynchronous
 * data fetching to retrieve a list of users from the following public API endpoint:
 * 'https://jsonplaceholder.typicode.com/users'.
 *
 * The component must:
 * 1. Define and manage three separate pieces of state using the `useState` hook:
 * a. `data`: An array to store the fetched user objects.
 * b. `loading`: A boolean flag to indicate when the fetch operation is in progress.
 * c. `error`: A string or null to store any error message encountered.
 * 2. Define a type alias, `User`, to ensure strong typing for the user objects (containing `id` and `name`).
 * 3. Use the `useEffect` hook with an empty dependency array (`[]`) to execute the data fetching logic only once, immediately after the component mounts.
 * 4. Implement conditional rendering:
 * - Display a **"Loading..."** message when the `loading` state is true.
 * - Display the **"Failed to load"** error message if the fetch operation fails.
 * 5. Upon successful fetching, render the list of users, displaying both the user's `id` and `name` in an unordered list (`<ul>`).
 *
 * This component demonstrates client-side data fetching, state management, and conditional
 * rendering using modern **React Hooks** in a functional component.
 */
