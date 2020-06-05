"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
// 测试babel
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
        console.log("Hello, my age is " + this.age);
    };
    return Person;
}());
new vue_1["default"]({
    el: '#app',
    template: '<App />',
    components: { App: App_vue_1["default"] },
    created: function () {
        new Person('heartbeat', 20).sayHello();
    }
});
