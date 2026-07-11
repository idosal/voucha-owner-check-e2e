export function summarizeNumbers(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }

  const total = values.reduce((sum, value) => sum + value, 0);
  return {
    count: values.length,
    total,
    average: values.length === 0 ? 0 : total / values.length,
  };
}

export function selectNumbersInRange(values, minimum, maximum) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }
  if (minimum > maximum) {
    throw new RangeError("minimum must not exceed maximum");
  }

  return values.filter((value) => value >= minimum && value <= maximum);
}
