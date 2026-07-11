import assert from "node:assert/strict";
import test from "node:test";

import { summarizeNumbers } from "../src/calculator.js";

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

test("rejects arrays containing non-finite values", () => {
  for (const value of [Number.NaN, Number.POSITIVE_INFINITY, "3"]) {
    assert.throws(() => summarizeNumbers([1, value, 2]), {
      name: "TypeError",
      message: "values must contain only finite numbers",
    });
  }
});
