function fizzBuzz(n){
    // FizzBuzz problem 
    // لو الرقم اللي داخل بيقبل القسمه علي 3 هيعرض Fizz
    //  لو الرقم اللي داخل بيقبل القسمه علي 5 هيعرض Buzz
    // لو الرقم اللي داخل بيقبل القسمه علي ال 5 و ال 3 هيعرض fizzBuzz
    //let n=15;
    let arr=[]
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            arr.push('FizzBuzz')
        }
        else if(i%3==0 && i%5!=0){
            arr.push('Fizz')
        }
        else if(i%5==0 && i%3!=0){
            arr.push('Buzz')
        }
        else{
            arr.push(i.toString())
        }
    }
    return arr
};

console.log(fizzBuzz(15))