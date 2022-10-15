/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

function containsNearbyDuplicate(nums, k) {
    /*let duplicated_items = []
    //let sum 
    for(let i=0;i<nums.length ; i++){
        if(nu&&nums.includes(nums[i] , nums.indexOf(nums[i]) + 1)){
            duplicated_items.push(nums[i])
            
        }
    }
    let new_arr = [...new Set(duplicated_items)]
    let sum = new_arr.reduce((acc,c)=>{
        return acc-c
    },1)

    return Math.abs(sum)<=k*/

    const uniqueElements = new Set(nums);
    const filteredElements = nums.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });

    console.log(filteredElements)
    let unique_filtered = [... new Set(filteredElements)]
    if(unique_filtered.length!=0){
        let sum = unique_filtered.reduce((acc,c)=>{
            return acc-c
        },0)
        return Math.abs(sum)<=k
    }

    else{
        return false
    }

    
};

console.log(containsNearbyDuplicate([99,99] , 2)) //true