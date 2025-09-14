"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = removeDuplicates;
function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}
