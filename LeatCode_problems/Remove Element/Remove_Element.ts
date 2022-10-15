function removeElement(nums: number[], val: number): number {
    while (nums.includes(val)){
        //عشان هو عايز نفس الااراي ترجع وهي ممسوح منها التكرار
        // لكن ال num[0]=nums[1]
        // مش بتنفع
        nums.splice(nums.indexOf(val),1);
    }
    console.log(nums)
    return nums.length;
 
};

console.log(removeElement([3,2,2,3], 3))