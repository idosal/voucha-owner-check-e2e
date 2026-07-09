export function summarizeNumbers(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }

  const finiteValues = values.filter((value) => Number.isFinite(value));
  const total = finiteValues.reduce((sum, value) => sum + value, 0);
  return {
    count: finiteValues.length,
    total,
    average: finiteValues.length === 0 ? 0 : total / finiteValues.length,
  };
}
