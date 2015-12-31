/**
 * Created by haibao on 2015/12/21.
 */


function *fx(n){
    var a= 0, b = 1, t,count = 0;
    while(count < n){
        yield a;
        t = a +b;
        a = b;
        b = t;
    }
    return a;
}

var fn = fx(5);


console.log(fn.next());
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());