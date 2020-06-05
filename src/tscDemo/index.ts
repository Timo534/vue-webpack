// --------------------------- 基础类型 ------------------------------
// Boolean
let isDone: boolean = false
console.log(isDone)
// Number
let decLiteral: number = 1
console.log(decLiteral)
// String
let myName: string = 'heartbeat'
console.log(myName)
// 1、Array
let list: number[] = [1, 2, 3]
console.log(list)
// 2、Array
let arr: Array<number> = [1, 2, 3]
console.log(arr)
// Tuple 元组
let tuple: [number, string, boolean] = [1, 'heartbeat', true]
console.log(tuple)
// enum 枚举
// Any
let notSure: any = 1
notSure = 'heartbeat'
notSure = true
console.log(notSure)
let listAny: any[] = [1, 'heartbeat', false]
console.log(listAny)
// Object
let perttySure: object = {}
console.log(perttySure)
// Void
function warnUser (): void {
  console.log('this function no return value')
}
warnUser()
// Undefined and Null
let u: undefined
let n: null = null
console.log(u, n)
// 类型断言
// ----------------------------------- 接口 ----------------------------------
interface SquareConfig {
    readonly height: number;
    color?: string;
    width: number;
}
function createSquare (config: SquareConfig): { color?: string; area: number } {
  return { color: config.color, area: 100 }
}
createSquare({ color: 'red', width: 10, height: 10 })
