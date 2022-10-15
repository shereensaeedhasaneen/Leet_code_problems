function addStrings(num1, num2) {
    // when use BigInt Not use + (unary operator)
    return (BigInt(num1) + BigInt(num2)).toString()
};

console.log(addStrings("11","123")) // 134
console.log(addStrings("456","77")) // 533
console.log(addStrings("0","0")) // 0
console.log(addStrings("9333852702227987","85731737104263")) // "9419584439332250"

