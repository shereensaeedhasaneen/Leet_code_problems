function isPowerOfFour(n) {
     /** 
        16/4=4
        4/4=1
        1 !== 0  ===> false
       ////*/
       while(n>0){
        if(n/4 == 1 || n==1 ){
            return true
        }
        n = n/4
       }
       return false
};

console.log(isPowerOfFour(18))