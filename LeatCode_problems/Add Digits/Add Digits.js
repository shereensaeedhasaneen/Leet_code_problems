function addDigits(num) {
    console.log(num[0])
    let ss=num.toString()
    if(ss.length==1){
        return num
    }
    else{
        console.log('on')
        //let i=0
        let sum=0
        for(let i=0;i<ss.length;i++){
            sum+=(+ss[i])
            if(sum.toString().length==1){
                break;
            }
            else{
                i=0
                continue;
            }
        }
        
        return sum
    }
   
};
console.log(addDigits(38))