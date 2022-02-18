`use strict`;

export default function removeDuplicates(arr) {
  const result = [];
  const duplicatesIndices = [];

  arr.forEach((current, index) => {
    if (!duplicatesIndices.includes(index)) result.push(current);

    for (
      let comparisonIndex = index + 1;
      comparisonIndex < arr.length;
      comparisonIndex++
    ) {
      const comparison = arr[comparisonIndex];
      if (current.id == comparison.id) duplicatesIndices.push(comparisonIndex);
    }
  });
  return result;
}
