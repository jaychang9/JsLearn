/**
 * Created by haibao on 2015/12/29.
 */
console.log(true === new Boolean());

console.log(Number.isNaN(NaN));
console.log(Array.isArray([]));

console.log(1/0);
console.log(0/0);

console.log(typeof(function(){}));
console.log(typeof({}));
console.log((function(){}).__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);