/**
 * Created by haibao on 2015/12/21.
 */
function fib(n){
    var a = 0,b = 1,t,array = [0,1];
    while(array.length <= 5){
        t = a+b;
        a = b;
        b = t;
        array.push(t);
    }
    return array;
}





console.log(fib(5));