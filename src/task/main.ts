import Vue from 'vue'
import App from './App.vue'
// import '../learn/b'
// import './c'
// import './e'

// 测试babel
class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello () {
      console.log(`Hello, my name is ${this.name}`)
      console.log(`Hello, my age is ${this.age}`)
    }
}


// eslint-disable-next-line no-unused-vars
const vue = new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  created () {
    new Person('heartbeat', 20).sayHello()
  }
})
