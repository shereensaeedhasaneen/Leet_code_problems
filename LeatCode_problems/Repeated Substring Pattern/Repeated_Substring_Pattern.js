function repeatedSubstringPattern(s) {
    /*let arr=[]

    if(s.length==1){
        return false
    }
    let i=1
    while(i<s.length){
        if(s[0]==s[i]){
           arr.push(s.substring(0,i));
           s= s.substr(i,s.length);
           console.log(s)
          // arr.push(s)
           i=1
        }
        else{

            i++;
        }
    }
    // console.log(s)
     arr.push(s)
    console.log(arr)
    console.log([... new Set(arr)])
    return [... new Set(arr)].length == 1*/
    console.log(s.repeat(2))
    console.log(s.repeat(2).slice(1, -1))
    return s.repeat(2).slice(1, -1).includes(s);
};
//console.log(repeatedSubstringPattern("aaa")) // true
//console.log(repeatedSubstringPattern("abab")) // true
console.log(repeatedSubstringPattern("aba")) // false
//console.log(repeatedSubstringPattern("abcabcabcabc")) // true
//console.log(repeatedSubstringPattern("a")) // false
//console.log(repeatedSubstringPattern("abaababaab")) // true