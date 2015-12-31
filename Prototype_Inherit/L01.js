/**
 * Created by haibao on 2015/12/24.
 */
var Person = function(){
    this.canTalk = true;
    this.talk = function(){
        if(this.canTalk){
            console.log(this.name+" talk something.");
        }
    }
}

var Employee = function(){
    this.name
}