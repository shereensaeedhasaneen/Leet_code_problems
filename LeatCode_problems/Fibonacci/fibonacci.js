/*
فكره الالجوريزم دا انه لازم ال 
n == 2
متكونش اقل من ال 2
ولو هي 2 بتريترن اراي فيها [0,1]
لو 3 يبقي الاراي فيها  [0,1,1]
ال 1 التالته دي مجموع ال 0و1 ال قبلها 
لو ب 7 يبقي الاراي هتكون [0,1,1,2,3,5,8]
array_Length == n
*/
function Fibonacci(n){
    let arr = [0,1]
    if(n>1){
        if(n==2){
            return arr;
        }
        else{
            let sum =0
            while(n != arr.length){
                sum = arr[arr.length - 1] +  arr[arr.length - 2]
                arr.push(sum)
            }
            return arr
        }
    }
    else{
        return 0
    }
}

console.log(Fibonacci(7))


//////// Video Solution /////////
function Fibonacci_2(n){
    const fib = [0,1]
    for(let i=2; i<n ; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(Fibonacci_2(7))

//// this Algorithm is ===> O(n)
