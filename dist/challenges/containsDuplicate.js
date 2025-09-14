"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsDuplicate = containsDuplicate;
function containsDuplicate(nums) {
    const map = new Map();
    for (const number of nums) {
        if (map.get(number) !== undefined) {
            return true;
        }
        else {
            map.set(number, number);
        }
    }
    console.log(map);
    return false;
}
