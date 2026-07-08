export function summarizeNumbers(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }

  const numbers = values.filter((value) => typeof value === "number" && Number.isFinite(value));
  const total = numbers.reduce((sum, value) => sum + value, 0);
  return {
    count: numbers.length,
    total,
    average: numbers.length === 0 ? 0 : total / numbers.length,
  };
}
