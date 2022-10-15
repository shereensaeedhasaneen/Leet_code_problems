/** 
 * palindrome => means 121 reads as 121 from left to right and from right to left
*/

/// 1St Solution
/*function isPalindrome(x: number): boolean {
    console.log(x.toString().split('').reverse())
   let first_arr = x.toString().split('')
   let sec_arr = x.toString().split('').reverse()

   // To compare between 2 arrays
   return JSON.stringify(first_arr) === JSON.stringify(sec_arr)
};*/


///// 2nd Solution //////
/*function isPalindrome(x: number): boolean {
    console.log(x.toString().split('').reverse())
   let first_arr = x.toString().split('')
   let sec_arr = x.toString().split('').reverse()
    console.log(first_arr.join(''))
   return first_arr.join('') === sec_arr.join('')
};*/


/// 3rd Solution //////
function isPalindrome(x: number): boolean {
    var i = x.toString().length;
    let first_arr = x.toString().split('')
    let sec_arr = x.toString().split('').reverse()
    while (i--) {
        if (first_arr[i] !== sec_arr[i]) return false;
    }
    return true
};

console.log(this.isPalindrome(121))