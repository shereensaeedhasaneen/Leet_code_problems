function mySqrt(x) {
    return Math.trunc(Math.sqrt(x));
}
;
/*
 v        t   r   f   c   ===> t= trunc , r=round , f=floor , c=ceil
 3.87 : [ 3,  4,  3,  4]
 3.14 : [ 3,  3,  3,  4]
-3.14 : [-3, -3, -4, -3]
-3.87 : [-3, -4, -4, -3]
*/
console.log(mySqrt(8));
