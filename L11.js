/**
 * Created by haibao on 2015/12/18.
 */
"use strict"
var jay = {
    birth :1987,
    age:function(){
        var self = this;
        function getAgeFromBirth(){
            console.log( this);
            console.log("birth="+self.birth);
            return new Date().getFullYear()-self.birth;
        }
        return getAgeFromBirth();
    }
};
console.log(jay.age());
console.log(12-undefined);