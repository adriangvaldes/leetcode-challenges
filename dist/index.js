"use strict";
function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
