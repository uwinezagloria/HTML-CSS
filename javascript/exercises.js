function sum(){
  for(let i=0;i<100;i++){
if(i%2===0){
    return i
}
  }
    
}
console.log(sum())
//palindrome
function palindromeChecker(name){
let reversedWord=name.split('').reverse().join('')
if(name===reversedWord){
    return `${name} is palindrome` 
}
else{
    return  `${name} is  not palindrome`
}
}
console.log(palindromeChecker("isi"))
console.log(palindromeChecker("uwineza"))
//Create a function that receives a string and changes it into capital letters.
function capitalization(str){
    let capital=str.toUpperCase()
    return capital
}
console.log(capitalization("gloria"))
//Write a function that counts the number of vowels in a string.
function countingVowel(word){
    let arr=word.split('')
    var num=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==='i'||arr[i]==='o'||arr[i]==='u'||arr[i]==='e'||arr[i]==='a'){
num=num+1
            }
      
    }
    return num
}
 console.log(countingVowel("uwineza"))
 //Write a function that sorts an array of numbers in ascending order.
 function sorting(number){
    let order=number.sort((a,b)=>a-b)
    return order
 }
 let array=[1,4,7,2,5,0]
 console.log(sorting(array))
 //Write a function that filters out negative numbers from an array.
 function filtering(number){
    let negative=number.filter(num=>num<0)
    return negative
 }
 let nbr=[1,2,3,-1,-3,-4]
 console.log(filtering(nbr))
 //product of numbers
 function product(array){
let prod=array.reduce((acc,curr)=>acc*curr,1)
return prod
 }
 let num=[1,2,3,4]
 console.log(product(num))
 // displaying keys of object
 let obj={
    name:"uwineza",
    age:21
 }
 for(const key in obj){
    console.log(key)
    console.log(obj[key])
 }