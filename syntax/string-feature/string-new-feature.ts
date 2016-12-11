
/*
********************************
* 多行字符串的支持               *
********************************
*/
//多行字符串的支持 使用反引号[`]来支持多行字符串
//可以随意换行，不会报错
var content = ` this 
is 
a 
Multi 
line 
`;


/*
*******************************
* 字符串模板                   *
*******************************
*/
//在反引号中使用${filed||func}来使用字符串模板
//如果使用正常的[""]是不会有效果的
var myName = "Hongliang.Liu"

var getName = function(){
    return myName;
}
console.log(`Hello ${myName}`);
console.log(`Hello ${getName()}`);

//字符串模板和多行字符串的例子
console.log(`<div>
    <span>${myName}</span>
    <span>${getName()}</span>
</div>`);

/*
*******************************
* 自动拆分字符串                  *
可以使用一个字符串模板来调用一个方法
同时将模板的表达式的参数传递给方法  *
*******************************
*/
function test(template,name,age ){
    console.log(template);
    console.log(name);
    console.log(age);
}

function getAge(){
    return 18;
}

//使用字符串模板调用方法的时候不要写圆括号
test`Hello my name is ${myName},i am ${getAge()}`

/*
> 控制台输出
[ 'Hello my name is ', ',i am ', '' ]
Hongliang.Liu
18
 */