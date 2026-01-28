import { validate } from "./solution";

describe("Lab 14: Recursive Schema Validator", () => {
  const schema = {
    id: { type: "number", required: true },
    profile: {
      type: "object",
      required: true,
      schema: {
        username: { type: "string", required: true },
        email: { type: "string", required: false },
      },
    },
  };

  test("should return no errors for valid data", () => {
    const data = {
      id: 1,
      profile: { username: "gaurav_dev" },
    };
    expect(validate(schema, data)).toEqual([]);
  });

  test("should catch missing required fields", () => {
    const data = { id: 1, profile: {} }; // profile.username missing
    const errors = validate(schema, data);
    expect(errors).toContain("Field 'profile.username' is required");
  });

  test("should catch type mismatches", () => {
    const data = {
      id: "1", // Should be number
      profile: { username: 123 }, // Should be string
    };
    const errors = validate(schema, data);
    expect(errors).toContain("Field 'id' expected type 'number', got 'string'");
    expect(errors).toContain(
      "Field 'profile.username' expected type 'string', got 'number'",
    );
  });

  test("should handle deep nesting beyond 2 levels", () => {
    const deepSchema = {
      a: {
        type: "object",
        required: true,
        schema: {
          b: {
            type: "object",
            required: true,
            schema: {
              c: { type: "string", required: true },
            },
          },
        },
      },
    };
    expect(validate(deepSchema, { a: { b: {} } })).toContain(
      "Field 'a.b.c' is required",
    );
  });
});
