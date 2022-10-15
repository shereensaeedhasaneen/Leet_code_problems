function searchInsert(nums: number[], target: number): number {
    while (nums.includes(target)){
      return  nums.indexOf(target);
    }
    while (!nums.includes(target)){
        nums.push(target)
        let arr = nums.sort((a, b) => a - b)  // before this the sort result [10,3,5,7,8,9]
                                             // after  this the code result [3,5,7,8,9,10]
        console.log(arr)
      return  arr.indexOf(target);
    }
   return 0

};

console.log(searchInsert([3,5,7,9,10], 8))