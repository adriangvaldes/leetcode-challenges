export function intersectionArrays(nums1: number[], nums2: number[]): number[] {
  // To optimize space, we use the smaller array to build the frequency map.
  // This helps to keep the map size as small as possible.
  if (nums1.length > nums2.length) {
    return intersectionArrays(nums2, nums1);
  }

  const numCount = new Map<number, number>();
  const result: number[] = [];

  // Build a frequency map for the first (smaller) array.
  for (const num of nums1) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  // Iterate through the second array and check for common elements.
  for (const num of nums2) {
    // If the number exists in the map and its count is greater than 0...
    if (numCount.has(num) && numCount.get(num)! > 0) {
      // Add it to the result array.
      result.push(num);
      // Decrement the count in the map to account for the element being "used".
      numCount.set(num, numCount.get(num)! - 1);
    }
  }

  return result;
}
