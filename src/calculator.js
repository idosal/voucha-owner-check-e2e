export function summarizeNumbers(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }

  if (!values.every((value) => typeof value === "number" && Number.isFinite(value))) {
    throw new TypeError("values must contain only finite numbers");
  }

  const total = values.reduce((sum, value) => sum + value, 0);
  return {
    count: values.length,
    total,
    average: values.length === 0 ? 0 : total / values.length,
  };
}
