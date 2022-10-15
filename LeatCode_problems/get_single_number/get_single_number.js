function singleNumber(nums) {
    let str=nums.sort()//.join('')
    for(let i=0; i<str.length;i+=2){
        if(str[i] !== str[i+1]){
            //console.log(str[i])
            return str[i]
        }
        
    }
  return 0
};
console.log(singleNumber([2,2,1]))

// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) !== index);
// }

//console.log(removeDuplicates([2,2,1,3,1]));