function countOdds(low, high) {
    /*let arr=[]
    for(let i=low;i<=high;i++){
        if(i%2!=0){
            arr.push(i)
        }
    }
    console.log(arr)
    return arr.length*/

   /* let i=low
    let arr=[]
    while(!(i>high)){
        if(i%2!=0){
            arr.push(i)
        }
        i++
    }
    return arr.length*/
    return Array(high - low + 1).fill().map((_, idx) => low + idx).filter(x=>x%2!=0).length
};
console.log(countOdds(8,10))