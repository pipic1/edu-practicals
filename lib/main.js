import input, {test} from "./input"
console.log("hello world!!");
console.log("Response",input());
console.log("Response",test());

let b = '1'
console.log(b)
function a_fct() {
	b='2'
}
a_fct()
console.log(b)



let a ={b:'1'}
a.b=3
console.log(a.b)