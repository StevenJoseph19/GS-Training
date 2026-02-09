import { EventEmitter } from "./solution";

describe("Lab 10: Event Emitter", () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test("should register and emit events", () => {
    const spy = jest.fn();
    emitter.on("test", spy);
    emitter.emit("test", "payload");

    expect(spy).toHaveBeenCalledWith("payload");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("should handle multiple listeners for the same event", () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    emitter.on("data", spy1);
    emitter.on("data", spy2);

    emitter.emit("data");
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  test("should remove specific listeners using off", () => {
    const spy = jest.fn();
    emitter.on("removeMe", spy);
    emitter.off("removeMe", spy);
    emitter.emit("removeMe");

    expect(spy).not.toHaveBeenCalled();
  });

  test("once() should only fire a listener one time", () => {
    const spy = jest.fn();
    emitter.once("singleUse", spy);

    emitter.emit("singleUse");
    emitter.emit("singleUse"); // Should be ignored

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
