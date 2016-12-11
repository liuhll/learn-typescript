//在typeScript中可以为变量指定类型了
//IDE会对typescript进行检查，并给出警告
//但是 编译后的js文件并不会报错，可以正常的执行
//因为编译后的js文件依然不会为变量指定类型，js是一种弱类型的语言 
var myName:string = "张三";
//IDE会报红，给出警告
myname = 13;

var alias = "HAHA";
//依然会报红，typescript的类型推断机制，会根据该文件第一次赋值的变量给定的类型进行推动给变量的类型
//alias = 13;

var alias1:any = "liang";
//不会再报红了
alias1 = 16;

/*
可以为方法指定返回值类型，如果不允许方法有返回值，则指定为:void
 */
function test():void{
    //如果指定了返回值，则会报红
    return "";
}

/*
给方法的参数指定类型
 */
function test_output(name:string){
    console.log(name);
}
//如果为test_output()方法传递一个int类型的参数，则会报红
test_output(12);

/*
为变量指定自定义类型：接口或是class
 */

class Person{
    name:string;
    age:number;
}

var zhangsan:Person = new Person();
zhangsan.age = 18;
zhangsan.name = "ZHangsan";

console.log(`zhangsan Name ${zhangsan.age};age = ${zhangsan.age}`)


/*
给参数指定默认值
 */

//如何给方法的参数指定默认值,则指定默认值的参数必须在参数列表的最后
function test_defalt_params_value(a:string,b:string,c:string = "Jojo"):void{
    console.log(`a:${a};b:${b};c:${c}`);
}

test_defalt_params_value("this","is ","Demo");

//可选参数也必须声明在必选参数后面
function test_optional_params(a:string,b?:string,c:string ="KK"){
    console.log(a);
    //注意，如果方法是含有可选参数的话，那么方法体内部需要对可选参数是否空进行判断
    //console.log(b.length); //如果没有传值的话，会抛出异常的
    if(b !== null && b !==  undefined){
        console.log(b.length);
    }else{
        console.log("没有传递B参数");
    }
    console.log(c);
}

test_optional_params("Liuhongliang");