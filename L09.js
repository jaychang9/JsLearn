/**
 * Created by haibao on 2015/12/18.
 */

(function($){
    console.log($);
    function foo(){
        var x = 1;
        function bar(){
           // var x = 2;
            var y = x+1;
            console.log(y);
        }
        bar();
    }
    foo();
})("jQuery");


function foo(){
    var x = "Hello "+y;
    console.log(x);
    var y = "Jay Chang";

}
const PI = 3.14;
foo();
PI = 333;
var xxx = "aaa";
console.log(PI);