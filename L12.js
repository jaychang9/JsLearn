/**
 * Created by haibao on 2015/12/18.
 */
console.log(parseInt("11"));
var oldParseInt = parseInt;

var count = 0;
parseInt = function(){
    count++;
    var args = [];
    for(var i = 0 ; i < arguments.length ; i ++){
        args[i] = arguments[i];
    }
    oldParseInt.apply(null,args);
};

console.log(parseInt('33'));
console.log(parseInt('31'));
console.log(parseInt('111'));
console.log(count);

var a = 'Name';
var b = a;
a = 'changed';
console.log(b);