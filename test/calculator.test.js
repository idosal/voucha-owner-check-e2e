import assert from "node:assert/strict";
import test from "node:test";

import { summarizeNumbers } from "../src/calculator.js";

test("summarizes a number set", () => {
  assert.deepEqual(summarizeNumbers([3, 8, -2, 5]), {
    count: 4,
    total: 14,
    average: 3.5,
    positiveCount: 3,
    negativeCount: 1,
    zeroCount: 0,
  });
});

test("uses neutral summary values for an empty set", () => {
  assert.deepEqual(summarizeNumbers([]), {
    count: 0,
    total: 0,
    average: 0,
    positiveCount: 0,
    negativeCount: 0,
    zeroCount: 0,
  });
});

test("counts positive, negative, and zero values", () => {
  assert.deepEqual(summarizeNumbers([-4, 0, 3, 0, 9]), {
    count: 5,
    total: 8,
    average: 1.6,
    positiveCount: 2,
    negativeCount: 1,
    zeroCount: 2,
  });
});

test("rejects non-array input", () => {
  assert.throws(() => summarizeNumbers("1,2,3"), {
    name: "TypeError",
    message: "values must be an array",
  });
});
