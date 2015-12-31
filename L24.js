/**
 * Created by haibao on 2015/12/21.
 */
var fib = {
    a:0,
    b:1,
    t:1,
    max:5,
    count:0,
    next:function() {
        if (this.count++ < this.max) {
            this.t = this.a + this.b;
            this.a =this.b;
            this.b = this.t;
            return this.a;
        }else{
            return undefined;
        }
    }
}

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());