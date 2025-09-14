export function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const lastNumber = nums.pop();
    nums.unshift(lastNumber!);
  }
}
