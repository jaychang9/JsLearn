/**
 * Created by haibao on 2015/12/17.
 */
var techCompanies = ["Apple","Alibaba","Goggle","Oracle","Tencent","Mirosoft","Cisco"];
console.log(techCompanies.splice(2,3));//ֻɾ������ӣ�����ɾ����Ԫ�� "Goggle","Oracle","Tencent"
console.log(techCompanies);//"Apple","Alibaba","Mirosoft","Cisco"
console.log(techCompanies.splice(2,0,"JD","Xiaomi"));//����[]��Ϊû��ɾ���κ�Ԫ��
console.log(techCompanies);//ֻ��Ӳ�ɾ�� "Apple","Alibaba","JD","Xiaomi","Mirosoft","Cisco"


var hnCompanies = ["Hclc","Hongxiang","Kaser"];

var added = techCompanies.concat(hnCompanies);
console.log(added);

console.log(hnCompanies);

var added2 = added.concat("a",1,null,true,["nihao",2015,[20,15,"jay","jack"]],undefined,null,"hello");
console.log(added2);
console.log(added2.join("|"));
var newArray = added2.join("|").split("|");

console.log(newArray);
var array = [[11,12],[21,22]];

console.log(array[1][1]);

'use strict';
var lxArray = [[1, 2, 3], [400, 500, 600], '-'];


console.log(lxArray[1][1]);

