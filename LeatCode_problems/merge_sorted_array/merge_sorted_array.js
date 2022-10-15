/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    nums1.splice(m, n);
    nums1 = (nums1.concat(nums2)).sort(function (a, b) { return a - b; });
    return nums1;
}
;
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
