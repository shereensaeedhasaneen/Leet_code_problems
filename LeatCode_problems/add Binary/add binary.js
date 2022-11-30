// solution for small numbers 
/**
 * 
 * function addBinary(a: string, b: string): string {
    // convert a , b (binary) To numbers
    let sum = parseInt(a,2) + parseInt(b,2)
    console.log(sum) // sum with number
    return sum.toString(2) // result with binary
};
 * / */

 // solution for Big Large numbers 
function addBinary(a, b) {
    // convert a , b (binary) To numbers
    let sum = BigInt('0b'+a) + BigInt('0b'+b)
    console.log(BigInt(sum)) // sum with number
    return sum.toString(2) // result with binary
};
console.log(addBinary("11","1")) // 100
console.log(addBinary("1010","1011")) // 10101
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
//"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"