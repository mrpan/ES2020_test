import Message from './private'
import { async } from 'q';

const message =new Message();
//private method and properties
message.show();

console.log("name="+message.name)

//Promise.allSettled
const p1 = new Promise((res, rej) => setTimeout(res("foo"), 1000));

const p2 = new Promise((res, rej) => setTimeout(res("test"), 2000));

p1.then(value=>console.log(value))
Promise.allSettled([p1, p2]).then(data => console.log(data));
//可选操作
let person ={
  name:"",
  age:0
} 
console.log(person?.other?.name ?? "jorge");
console.log(person.age??12);

//bigint
const maxN = Number.MAX_SAFE_INTEGER;
const minN =Number.MIN_SAFE_INTEGER;

console.log(maxN+2)

const test1 = 1n+2n;
console.log(test1);

console.log(5n/2n)

console.log(Math.pow(2,53)== Math.pow(2, 53) + 1) //true
console.log(maxN+3== maxN + 1);

//Dynamic Import

const domath =async(number1,number2)=>{
  if(number1&&number2){
    const math = await import('./math.js');
    return math.add(number1, number2);
  }
}

const result =domath(1,6);
console.log(result.then(value=>console.log(value)));