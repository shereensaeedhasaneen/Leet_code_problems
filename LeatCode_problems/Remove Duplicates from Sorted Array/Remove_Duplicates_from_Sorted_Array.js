function removeDuplicates(nums) {
    var insertIndex = 1;
    for (var i = 1; i < nums.length; i++) {
        // We skip to next index if we see a duplicate element
        if (nums[i - 1] != nums[i]) {
            // Storing the unique element at insertIndex index and incrementing
            // the insertIndex by 1 
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    console.log(nums);
    return insertIndex;
}
;
console.log(this.removeDuplicates([1, 1, 2]));
