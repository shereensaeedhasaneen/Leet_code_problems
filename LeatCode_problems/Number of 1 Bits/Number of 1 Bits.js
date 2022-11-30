function hammingWeight(n) {
    
    console.log(BigInt('ox'+n.toString()))
    let num=n.toString(2)
    console.log(n.toString(2))
    //console.log(s.toString(2))
   return [...`${num}`].filter(i=>parseInt(i)==1).length
   
};
console.log(hammingWeight(11111111111111111111111111111101))