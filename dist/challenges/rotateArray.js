"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotate = rotate;
function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        const lastNumber = nums.pop();
        nums.unshift(lastNumber);
    }
}
