function lengthOfLastWord(s: string): number {
    let arr = s.trim().split(" ")
    console.log(arr)
    console.log(arr[arr.length-1].length)
    return arr[arr.length-1].length;
};
console.log(lengthOfLastWord("luffy is still joyboy"))