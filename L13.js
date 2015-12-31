/**
 * Created by haibao on 2015/12/18.
 */
function add(a,b,fx){
    return fx(a)+fx(b);
}

console.log(add(-3,5,Math.abs));