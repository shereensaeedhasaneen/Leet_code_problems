function plusOne(digits) {
    // For small numbers
    /*let number_plus_one = Number(digits.join('')) + 1
    return Array.from(String(number_plus_one), Number) */
    // For Big numbers
    var number_plus_one = BigInt(digits.join('')) + 1n; // n represent bigNumber
    return Array.from(String(number_plus_one), Number);
}
;
console.log(plusOne([9]));
