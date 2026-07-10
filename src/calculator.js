export function summarizeNumbers(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }

  let total = 0;
  let minimum = null;
  let maximum = null;

  for (const value of values) {
    total += value;
    minimum = minimum === null || value < minimum ? value : minimum;
    maximum = maximum === null || value > maximum ? value : maximum;
  }

  return {
    count: values.length,
    total,
    average: values.length === 0 ? 0 : total / values.length,
    minimum,
    maximum,
    spread: values.length === 0 ? 0 : maximum - minimum,
  };
}
