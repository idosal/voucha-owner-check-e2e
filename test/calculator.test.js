import assert from "node:assert/strict";
import test from "node:test";

import { summarizeNumbers } from "../src/calculator.js";

test("summarizes the center and spread of a number set", () => {
  assert.deepEqual(summarizeNumbers([3, 8, -2, 5]), {
    count: 4,
    total: 14,
    average: 3.5,
    minimum: -2,
    maximum: 8,
    spread: 10,
  });
});

test("uses neutral spread values for an empty set", () => {
  assert.deepEqual(summarizeNumbers([]), {
    count: 0,
    total: 0,
    average: 0,
    minimum: null,
    maximum: null,
    spread: 0,
  });
});

test("handles inputs larger than a function argument list", () => {
  const values = Array.from({ length: 150_000 }, (_, index) => index - 75_000);

  assert.deepEqual(summarizeNumbers(values), {
    count: 150_000,
    total: -75_000,
    average: -0.5,
    minimum: -75_000,
    maximum: 74_999,
    spread: 149_999,
  });
});

test("rejects non-array input", () => {
  assert.throws(() => summarizeNumbers("1,2,3"), {
    name: "TypeError",
    message: "values must be an array",
  });
});
