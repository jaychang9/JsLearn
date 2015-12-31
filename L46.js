/**
 * Created by haibao on 2015/12/29.
 */
var _ = require("underscore");

var log = _.bind(console.log,console);
log("Do Something.");

var pow2N = _.partial(Math.pow,2);
console.log(pow2N(10));

var cube = _.partial(Math.pow,_,3);

console.log(cube(3));


var factorial = _.memoize(function(n){
    log("start caculating.");
    var i = n,result = 1;
    while(i > 1){
        result *= i;
        i--;
    }
    log("completed!");
    return result;
});


console.log(factorial(5));
console.log("**************************")
console.log(factorial(5));

console.log("**************************")
var factorial2 = _.memoize(function(n){
    if(n == 1){
        log("completed.");
        return 1;
    }else{
        return n*factorial2(n-1);
    }
});
console.log("**************************")
console.log(factorial2(9));
console.log("**************************")
console.log(factorial2(9));


var register = _.once(function () {
    log('Register ok!');
});


register();
register();
register();
register();


_.delay(function(){log("execute something.")},2000);

_.delay(log, 2000, 'Hello,', 'world!');