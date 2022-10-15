function twoSum(nums: number[], target: number): number[] {
   for(let i=0 ; i<nums.length ; i++){
      for(let j=i+1 ; j<=nums.length-1 ; j++){
         if(nums[i] + nums[j] == target){
            return [i , j]
         }   
   }
}
   return []
};

console.log(this.twoSum([2,11,7,15] , 9))  // [0,2]
console.log(this.twoSum([3,2,4] , 6))  // [1,2]
console.log(this.twoSum([3,3] , 6))  // [0,1]
console.log(this.twoSum([2,5,5,11] , 10))  // [1,2]