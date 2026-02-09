// Problem Statement
// Create a class EventEmitter that allows objects to communicate with each other.
// It should support:
// - on(eventName, callback): Registers a listener.
// - emit(eventName, data): Triggers all listeners for that event with data.
// - off(eventName, callback): Removes a specific listener.
// - once(eventName, callback): Registers a listener that fires only once.

// The Goldman Twist: How do you handle "Memory Leaks"?
// If you don't implement off correctly, listeners stay in memory forever.
// Also, ensure that calling emit for an event with no listeners doesn't crash the app.

export class EventEmitter {
  constructor() {
    // TODO: Initialize a storage mechanism for events and their callbacks.
    // Hint: A Map where keys are event names and values are arrays of callbacks is highly efficient.
  }

  on(eventName, callback) {
    // TODO: Check if the event exists in your storage.
    // If not, initialize it. Then push the callback into the event's listener list.
  }

  emit(eventName, ...args) {
    // TODO: Retrieve the list of callbacks for the given eventName.
    // TODO: If they exist, execute each callback with the provided arguments.
    // Pro-Tip: Iterate over a copy of the array to prevent issues if a
    // listener removes itself during the loop.
  }

  off(eventName, callback) {
    // TODO: Find the event and remove the specific callback from its list.
    // TODO: If no listeners remain for that event, clean up the key to save memory.
  }

  once(eventName, callback) {
    // TODO: Create a "wrapper" function.
    // This wrapper should:
    // 1. Execute the original callback.
    // 2. Immediately call this.off() to remove itself.
    // TODO: Register the wrapper using the .on() method.
  }
}
