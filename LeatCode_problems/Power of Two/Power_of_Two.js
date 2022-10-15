// First Solution

/*function isPowerOfTwo(n) {
    for(let i =0 ; i<32 ; i++){
        if(Math.pow(2,i) === n){
            return true
        }
    }
    return false
};*/


// Second Solution 

function isPowerOfTwo(n) {
    return Math.log2(n) % 1 == 0;
};
console.log(isPowerOfTwo(3))