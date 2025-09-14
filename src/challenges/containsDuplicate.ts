export function containsDuplicate(nums: Number[]): boolean {
  const map = new Map();

  for (const number of nums) {
    if (map.get(number) !== undefined) {
      return true;
    } else {
      map.set(number, number);
    }
  }

  return false;
}
