import assert from "node:assert/strict";
import test from "node:test";

import { summarizeNumbers } from "../src/calculator.js";

test("summarizes a number set", () => {
  assert.deepEqual(summarizeNumbers([3, 8, -2, 5]), {
    count: 4,
    total: 14,
    average: 3.5,
    median: 4,
  });
});

test("uses neutral summary values for an empty set", () => {
  assert.deepEqual(summarizeNumbers([]), {
    count: 0,
    total: 0,
    average: 0,
    median: 0,
  });
});

test("uses the middle sorted value for an odd-sized set", () => {
  assert.equal(summarizeNumbers([9, 1, 4]).median, 4);
});

test("does not reorder the caller's values while finding the median", () => {
  const values = [9, 1, 4, 2];

  summarizeNumbers(values);

  assert.deepEqual(values, [9, 1, 4, 2]);
});

test("rejects non-array input", () => {
  assert.throws(() => summarizeNumbers("1,2,3"), {
    name: "TypeError",
    message: "values must be an array",
  });
});
