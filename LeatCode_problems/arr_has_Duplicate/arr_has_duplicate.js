//// first solution /////
/*function containsDuplicate(nums) {
    let bool
    for(let i=0;i<nums.length ; i++){
        if(nums.includes(nums[i] , nums.indexOf(nums[i]) + 1)){
            bool = true
           break;
            
        }
        else{
            bool =false
        }
    }

    return bool;
};*/

////////////////

//// second solution /////
function containsDuplicate(nums) {
    let distinct = [...new Set(nums)]
    return (distinct.length!==nums.length)
}

console.log(containsDuplicate( [1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate( [1,2,3,4]))
console.log(containsDuplicate( [1,2,3,1]))