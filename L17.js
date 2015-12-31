/**
 * Created by haibao on 2015/12/18.
 */
var arr = [1,2,3,4,5,6,7,8,9];

console.log(
arr.filter(function(x){
    return x % 2 !== 0
}));

//È¥µô¿Õ×Ö·û´®
var arr2 = ["11","aa",null,"cc","",undefined,"asdfj","jay"];
console.log(arr2.filter(function(x){
    return x && x.trim();
}));

function isPrime(num){
    if(num === 1) return false;
    for(var i = 2; i <= Math.sqrt(num) ; i ++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

var array = [];
for(var i = 1 ; i <= 100 ; i ++){
    array.push(i);
}

console.log(array.filter(isPrime).toString());