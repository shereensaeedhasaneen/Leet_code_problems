function thirdMax(nums) {
    let uniqe_arr = [... new Set(nums)].sort()
    console.log(uniqe_arr)
    if(uniqe_arr.length<3){
        return Math.max(...uniqe_arr)
    }
 
    let res=0
    let index
    for(let i=0; i<2 ;i++){
        index=uniqe_arr.indexOf(Math.max(...uniqe_arr))
        uniqe_arr.splice(index,1)
        res=Math.max(...uniqe_arr)
    }
    console.log(uniqe_arr)
    return res
};

console.log(thirdMax([1,2,2,5,3,5])) // 2
console.log(thirdMax([3,2,1])) // 1
console.log(thirdMax([1,2])) // 2
console.log(thirdMax([2,2,3,1])) // 1
