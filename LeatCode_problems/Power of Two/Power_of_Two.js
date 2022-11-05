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

/*function isPowerOfTwo(n) {
    return Math.log2(n) % 1 == 0;
};*/

// Third Solution 

/*function isPowerOfTwo(n) {
   if(n<1){
    return false // n is integer only
   }
   //** 
    8/2=4
    4/2=2
    2/2=1
    
    1 !== 0  ===> false
   /////
   while(n>1){
    if(n%2 !==0){
        return false
    }
    n = n/2
   }
   return true
};*/


// Forth solution with BitWise

/*
 1==> 0001
 0==> 0000
 ----------
 res=> 0000


 3==> 0100
 2==> 0010
 ----------
 res=> 0000
* */
function isPowerOfTwo(n) { 
    return (n & (n-1)) === 0;
};


console.log(isPowerOfTwo(3))