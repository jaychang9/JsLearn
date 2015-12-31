/**
 * Created by haibao on 2015/12/21.
 */
function fx(){
    var arr = [];
    for(var i = 1 ; i <= 3 ; i ++){
        arr.push((function(n){
            return function(){
                return n*n;
            }
        })(i));
    }
    return arr;
}

var arr = fx();

var f1 = arr[0];
var f2 = arr[1];
var f3 = arr[2];
console.log(f1());
console.log(f2());
console.log(f3());


console.log(0 || 1);