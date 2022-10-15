/*

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers

*/
function isPalindrome(s) {
    let bool
    // To remove All non-alphanumeric characters
    const string_without_alphanumeric_chars = (s.replace(/[^a-z0-9]/gi, '')).toLowerCase();
    console.log(string_without_alphanumeric_chars)
    if(string_without_alphanumeric_chars===''){
        return true
    }
    else{
        for(let  i= 0 ; i<string_without_alphanumeric_chars.length ; i++){
            if(string_without_alphanumeric_chars[i]==string_without_alphanumeric_chars[string_without_alphanumeric_chars.length-(i+1)]){
                bool=true
            }
            else{
                bool =false
                break;
            }
        }
        return bool
    }
   
};
console.log(isPalindrome(" "))