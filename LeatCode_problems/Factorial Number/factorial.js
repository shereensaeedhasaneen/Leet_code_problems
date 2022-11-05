function factorial(n){
    if(n == 0)
    {
        return 1
    }
    let fact = 1
    for(let i = 0 ; i< n ; i++){
        fact*=(n-i) 
    }
    return fact
}

console.log(factorial(2))

////////// video solution /////////
function factorial2(n){
    let fact = 1
    for(let i = 2 ; i<= n ; i++){
        fact*=i
    }
    return fact
}

console.log(factorial2(1))