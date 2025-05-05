console.log("Hello World!");
let num=3/2;
console.log(Math.floor(num));
let array=[1,2,3];
 let a=array.push(4,6);// add new element at the end of the array
console.log(array);

console.log(a) // display the size or length of new array
//removes the last element in the array and display the value it has removed
let n=array.pop()
console.log(array)
console.log(n);
//shift function same as pop but removes frist element and display the value it has removed
let b=array.shift()
console.log(array)
console.log(b);
//unshift function is similar to push function but add new element at the start of array at the first index and display the length of the new array
let c=array.unshift(1)
console.log(array)
console.log(c);
function evenOrOdd(number) {
    let n=number;
    if(n%2===0){
      return "Even";
    }
    else{
      return "Odd";
  }
    }
  console.log(evenOrOdd(2));
 console.log( evenOrOdd(3));
 //In this kata you will create a function that takes a list of non-negative 
 // integers and strings and returns a new list with the strings filtered out.

 
 /*function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
let array=[1,1,1,2,1]
console.log(findUniq(array))


var nae="gloria";
console.log(nae) */
const fruits=["banana","orange"];
fruits.push("apple")
console.log(fruits)
console.log(fruits.sort())
console.log(fruits.toString())
console.log(fruits.indexOf("apple"))
console.log(fruits.length)
console.log(fruits.at(1))
console.log(fruits.at(-1))
console.log(fruits.join("*"))
//delete fruits[1]  not advised to use it
console.log(fruits)

const people=["eriz","chance","gloria"]
let peoples=people.concat("uwineza")
console.log(peoples)
console.log(peoples.concat(fruits))
console.log(fruits)
console.log(fruits.copyWithin(0,2)) //takes values on index 1 and be replace of the value wich was on index 2
console.log(fruits.includes("mango"))
console.log(fruits.includes("orange"))
const number=[10,1,0,3,4,14]
console.log(number.sort((a,b)=>a-b))//sorting numbers
console.log(fruits.sort())//string sorting
fruits.reverse()
console.log(fruits)
console.log(number.reverse())

var name="uwineza"
console.log(name.split()) //put this name into array output['uwineza']
console.log(name.split(''));// output[  'u', 'w', 'i','n', 'e', 'z','a']
let arr=name.split('')
  let arr2=arr.reverse()
console.log(arr2.join('')) //rweversing uwineza