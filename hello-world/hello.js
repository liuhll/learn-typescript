var Hello = (function () {
    function Hello(greeting) {
        this.greeting = greeting;
    }
    Hello.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Hello;
}());
var greeter = new Hello("Hello World");
document.body.innerHTML = greeter.greet();
//# sourceMappingURL=hello.js.map