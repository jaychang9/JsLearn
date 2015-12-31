
/**
 * Created by haibao on 2015/12/18.
 */
function foo(a,b,c){
    console.log("first arg="+arguments["0"]+",second arg="+arguments[1]+",third arg="+arguments[2]);
    if(arguments.length == 2){
        c = b;
        b = null;
    }
    console.log ("a="+a +",b="+b+",c="+c);
}

//foo(1,2);
//foo(1,2,3);

//console.log(-undefined);
//
//console.log(typeof NaN !== "number");

foo.apply(null,[1,2,3]);
