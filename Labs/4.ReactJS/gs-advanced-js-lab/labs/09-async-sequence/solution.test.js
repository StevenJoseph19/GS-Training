import { runInSequence } from "./solution";

describe("Lab 09: Async Sequence", () => {
  test("should pass results from one task to the next", async () => {
    const task1 = (val) => Promise.resolve(val + 10);
    const task2 = (val) => Promise.resolve(val * 2);
    const task3 = (val) => Promise.resolve(val - 5);

    const result = await runInSequence([task1, task2, task3], 5);

    // Logic: ((5 + 10) * 2) - 5 = 25
    expect(result).toBe(25);
  });

  test("should execute tasks in strict chronological order", async () => {
    const order = [];
    const createTask = (id, ms) => () =>
      new Promise((resolve) =>
        setTimeout(() => {
          order.push(id);
          resolve();
        }, ms),
      );

    await runInSequence([
      createTask("first", 50),
      createTask("second", 10),
      createTask("third", 1),
    ]);

    // Even though 'third' is faster, it must wait for 'second'
    expect(order).toEqual(["first", "second", "third"]);
  });

  test("should catch and stop at the first error in the chain", async () => {
    const task1 = () => Promise.resolve("ok");
    const task2 = () => Promise.reject("Failure in Task 2");
    const task3 = jest.fn(() => Promise.resolve("should not run"));

    await expect(runInSequence([task1, task2, task3])).rejects.toMatch(
      "Failure in Task 2",
    );
    expect(task3).not.toHaveBeenCalled();
  });
});
