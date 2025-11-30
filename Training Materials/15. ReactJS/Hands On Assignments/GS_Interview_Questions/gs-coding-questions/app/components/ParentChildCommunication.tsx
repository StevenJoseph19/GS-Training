import React, { useState } from "react";

// Define the shape of the props for the Child component
interface ChildProps {
  // onSend is a function that takes one string argument (the data) and returns nothing (void)
  onSend: (data: string) => void;
}

// Child component: Receives a callback 'onSend' from the parent.
function Child({ onSend }: ChildProps) {
  // Handler to execute the parent's callback when the button is clicked.
  const handleClick = () => {
    // Call the parent’s callback with data (string payload).
  };

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md mt-4 border border-blue-300">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">
        Child Component
      </h3>
      <p className="text-blue-700 mb-4">
        Click the button below to execute the function passed from the Parent.
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl transition duration-200 hover:bg-blue-700 shadow-md"
      >
        Send Message to Parent
      </button>
    </div>
  );
}

// Parent component: Manages state and passes the updater function (callback) to the Child.
export default function Parent() {
  // State is implicitly typed as string
  const [message, setMessage] = useState("Awaiting message from child...");

  // The callback function that the Child component will execute.
  // We explicitly type the 'data' argument as string.
  const handleChildMessage = (data: string) => {};

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 border-b pb-3">
        Parent Component
      </h1>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <p className="text-lg font-semibold text-gray-800">State in Parent:</p>
        <p className="text-xl font-mono text-green-600 mt-2 p-2 bg-green-50 rounded"></p>
      </div>

      {/* Pass handleChildMessage function as the 'onSend' prop to the Child */}
      <Child
        onSend={function (data: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
