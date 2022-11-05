function isPowerOfThree(n) {
   
       /** 
        27/3=9
        9/3=3
        3/3=1
        
        1 !== 0  ===> false
       ////*/
       while(n>0){
        if(n/3 == 1 || n==1 ){
            return true
        }
        n = n/3
       }
       return false
};

console.log(isPowerOfThree(1))