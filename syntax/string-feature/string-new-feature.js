/*
********************************
* 多行字符串的支持               *
********************************
*/
//多行字符串的支持 使用反引号[`]来支持多行字符串
//可以随意换行，不会报错
var content = " this \nis \na \nMulti \nline \n";
/*
*******************************
* 字符串模板                   *
*******************************
*/
//在反引号中使用${filed||func}来使用字符串模板
//如果使用正常的[""]是不会有效果的
var myName = "Hongliang.Liu";
var getName = function () {
    return myName;
};
console.log("Hello " + myName);
console.log("Hello " + getName());
//字符串模板和多行字符串的例子
console.log("<div>\n    <span>" + myName + "</span>\n    <span>" + getName() + "</span>\n</div>");
/*
*******************************
* 自动拆分字符串                *
*******************************
*/
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
function getAge() {
    return 18;
}
//使用字符串模板调用方法的时候不要写圆括号
(_a = ["Hello my name is ", ",i am ", ""], _a.raw = ["Hello my name is ", ",i am ", ""], test(_a, myName, getAge()));
var _a;
/*
> 控制台输出
[ 'Hello my name is ', ',i am ', '' ]
Hongliang.Liu
18
 */ 
//# sourceMappingURL=string-new-feature.js.map