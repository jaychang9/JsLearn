/**
 * Created by haibao on 2015/12/24.
 */
var test = function(resolve,reject){
    var timeOut = Math.random()*2;
    console.log("setTimeout is "+timeOut);
    setTimeout(function(){
        if(timeOut < 1){
            resolve("congratulation OK "+timeOut);

        }else{
            reject("oh no fail "+timeOut);
        }
    },timeOut);
}




var p1 = new Promise(test);

var p2 = p1.then(function(result){
    console.log("success "+result);
});

var p3 = p2.catch(function(result){
    console.log("fail "+result);
});

