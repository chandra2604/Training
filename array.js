//Array
const fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length);

fruits[5] = 'mango';
console.log(fruits[5]);            
console.log(Object.keys(fruits)); 
console.log(fruits.length);

fruits.length = 10;
console.log(fruits);              
console.log(Object.keys(fruits)); 
console.log(fruits.length);       
console.log(fruits[8]); 

fruits.length = 2;
console.log(Object.keys(fruits)); 
console.log(fruits.length);

fruits.push('fig','lemon','grapes','orange','pinapple');
console.log(fruits);

//1.Splice-insert,remove and replace
 let arr=["I","stu","JS"];
 arr.splice(1,1); // index 1st remove 1 element
 alert(arr);

 //remove two element and replace element
 let detail1=["I","stu","JS","right","now"];
 detail1.splice(0,3,"lets","dance");
 alert(detail1);

 //Return the array and remove the element
 let detail2=["I","learn","JS","right","now"];
 let removed=detail2.splice(0,2);
 alert(removed);

//insert the element without any removals using deletcount '0'
let detail3=["I","learn","Js","concept"];
detail3.splice(3,0,"easy","one");
alert(detail3);

//splice allowed negative index
let detail4=[1,2,3,7];
detail4.splice(-1,0,4,5,6);
alert(detail4);

//slice
let letters=["c","h","a","n","d"];
alert(letters.slice(2,4)); //copy 2 to 3
alert(letters.slice(-2)); // copy -2 till end

//concat
let numbers=[5,6,7];
let result=numbers.concat([8,9]);
console.log(result);
alert(numbers.concat([8,9],10,11));

//only copies the element and isconcatspeadable
let elements=[26,27];
let arrayLike={
    0: "I",
    1: "learn",
    2: "Js",
    [Symbol.isConcatSpreadable] : true,
    length:2
};
alert(elements.concat(arrayLike));


//forEach
let Condition=["chandra","Bhavani","Ramya"];
Condition.forEach(function(item,index,array)
{
alert(Condition);
});

//indexOf

let position = [1, 2, false];
alert( position.indexOf(2) ); 
let result3= position.indexOf(false); 
console.log(result3);
alert( position.indexOf(null) ); 

alert( position.includes(1) );
