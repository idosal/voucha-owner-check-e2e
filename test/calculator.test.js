import assert from "node:assert/strict";
import test from "node:test";

import { formatNumberList, summarizeNumbers } from "../src/calculator.js";

test("summarizes a number set", () => {
  assert.deepEqual(summarizeNumbers([3, 8, -2, 5]), {
    count: 4,
    total: 14,
    average: 3.5,
  });
});

test("uses neutral summary values for an empty set", () => {
  assert.deepEqual(summarizeNumbers([]), {
    count: 0,
    total: 0,
    average: 0,
  });
});

test("rejects non-array input", () => {
  assert.throws(() => summarizeNumbers("1,2,3"), {
    name: "TypeError",
    message: "values must be an array",
  });
});

test("formats a number list for display", () => {
  assert.equal(formatNumberList([3, 8, -2]), "3, 8, -2");
  assert.equal(formatNumberList([]), "");
});
