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
