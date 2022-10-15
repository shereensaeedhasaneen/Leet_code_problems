function sharedStart(array){
  var A= array.concat().sort();
  console.log(A)
  var a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
  console.log(a1)
  console.log(a2)
  while(i<L && a1.charAt(i)=== a2.charAt(i)) 
  {
      i++
  };
  return a1.substring(0, i);
}

console.log(sharedStart(["flower","flow","flight"]))  //=> 'inters

/*var longestCommonPrefix = function(strs) {
  let cur = strs[0]
  let ans = ""
  for(let i = 1; i < strs.length; i++){
      for(let j = 0; j < cur.length; j++){
          if(cur[j] == strs[i][j]){
              ans += cur[j]
          } else {
              break
          }
      }
      cur = ans
      ans = ""
  }
  return cur
};

let strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs))*/