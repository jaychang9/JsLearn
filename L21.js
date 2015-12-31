/**
 * Created by haibao on 2015/12/21.
 */
function createPowFunc(x) {
    return function (n) {
        return Math.pow(x, n);
    }
}

var pow2 = createPowFunc(2);
var pow3 = createPowFunc(3);
var pow4 = createPowFunc(4);
console.log(pow2(1));
console.log(pow3(2));
console.log(pow4(3));

var studen = {
    birthday:1990,
    getAge = function () {
        var b = this.birthday;
        return () =>new Date().getFullYear() - this.birthday;
    }
};