/**
 * Created by haibao on 2015/12/17.
 */
'use strict';

var height = 170
var weight = 10000;


var bmi = weight / (height^2);
console.log(bmi);
if(bmi < 18.5){
    console.log("too low");
}else if( bmi < 25 ){
    console.log("a little low");
}else if(bmi < 28){
    console.log("normal");
}else if(bmi < 32){
    console.log("a little high");
}else{
    console.log("too high");
}