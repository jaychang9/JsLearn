/**
 * Created by haibao on 2015/12/22.
 */
'use strict'
var str="a      ;   ,  b;;               c,d";
console.log(str.split(/[\s,;]+/));


console.log(/^[\s;,]+$/.test(" ,   ;,;;          , ;"));
console.log(/^[ack]+$/.test("acccccccccaaaaaaaaaaaaaaaaakkkkkkkkkkkaaaacccccccc"));



var number = "010 - 87401999";

var regex = /(\d{3})\s*-\s*(\d{8})/;
var result = regex.exec(number);
console.log(result);


var regex4Time = /^(0[0-9]|1[0-9]|2[0-3])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])$/;

var timeStr = "19:22:59";

console.log(regex4Time.exec(timeStr));

//̰��ƥ��


var tlppStr = "123000";

console.log(/^(\d+)(0*)$/.exec(tlppStr));


//��̰��ƥ�䣬��\d+���һ��?
console.log(/^(\d+?)(0*)$/.exec(tlppStr));



//ȫ��ƥ��


var globalStr = " JavaScript,js,;*x  ..jAvascript        \r\n" +
    "jScript     JScript     EMCScript       ";

//iλ���Դ�Сд
var globalRegex = /\w+Script/g;

console.log(globalRegex.exec(globalStr)+",lastIndex"+globalRegex.lastIndex);
console.log(globalRegex.exec(globalStr)+",lastIndex"+globalRegex.lastIndex);
console.log(globalRegex.exec(globalStr)+",lastIndex"+globalRegex.lastIndex);
console.log(globalRegex.exec(globalStr)+",lastIndex"+globalRegex.lastIndex);
console.log(globalRegex.exec(globalStr)+",lastIndex"+globalRegex.lastIndex);