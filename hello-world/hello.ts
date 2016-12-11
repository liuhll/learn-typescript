class Hello{
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}

var greeter = new Hello("Hello World");

document.body.innerHTML = greeter.greet();