import Vue from 'vue'
import App from './App'

// 测试babel
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  created() {
    new Person('heartbeat', 20).sayHello()
  }
})