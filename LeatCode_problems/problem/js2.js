function singleNumber(nums) {
    let str=nums.join('')
    // console.log(str)
    // console.log(str.slice(1,str.length))
    // let slicing_arr = str.slice(1,str.length) //21
    let res;
    for(let i=0; i<nums.length;i++){
        
        //if(!(nums.includes(nums[i] , i+1))){
            //console.log(true)
           // res.push(nums[i])
           // res=nums[i]
            const index = nums.indexOf(nums[i]);
            if (index > -1) { // only splice array when item is found
                nums.splice(index, 1); // 2nd parameter means remove one item only
            }
           // return res
        //} 
    }
  return nums
};
console.log(singleNumber([2,2,1,3,1]))

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) !== index);
}

//console.log(removeDuplicates([2,2,1,3,1]));