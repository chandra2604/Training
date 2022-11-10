//sorting 
const language= ['java','Framework','selenium','project','php'];
language.sort();
//['Framework', 'java', 'php', 'project', 'selenium']
language.reverse();
//['selenium', 'project', 'php', 'java', 'Framework']
console.log(language);
//['selenium', 'project', 'php', 'java', 'Framework']

let numerical=[2,300,200,10000,1,7,6];
numerical.sort();
//[1, 10000, 2, 200, 300, 6, 7]
console.log(numerical);
//[1, 10000, 2, 200, 300, 6, 7]


 colors=['Blue','pink','Yellow','Orange'];
const number=[20,30,1,2,3,20];
let numericString=['900','2','30','89'];
function compareArray(a,b){
    return a-b;
}

colors.join();
//'Blue,pink,Yellow,Orange'
colors.sort();
//['Blue', 'Orange', 'Yellow', 'pink']
number.sort();
// [1, 2, 20, 20, 3, 30]
number.join();
//'1,2,20,20,3,30'
number.sort(compareArray);
// [1, 2, 3, 20, 20, 30]


//sort(),find(),filter(),map(),reduce()

const aa=[34,2,6,12,7];
//sort().
aa.sort();
//[12, 2, 34, 6, 7]


//find().
let result=aa.find(value=> value<10)
console.log(result);
// 2

//filter().
let result1=aa.filter((value)=>{
    return value < 10
});

console.log(result1);
 // [2, 6, 7]

 //map().
let result2=aa.map((value)=>{
return value < 10;
});
console.log(result2);
// [false, true, false, true, true]

let result3=aa.map((value)=>{
return '*'+ value; 
});
console.log(result3);
// ['*12', '*2', '*34', '*6', '*7']
let result4=aa.map((acc,value)=>{
 return acc * value; 
});

console.log(result4);
// [0, 2, 68, 18, 28]

//reduce().
let result5=aa.reduce((acc,value)=>{
return acc * value; 
});

console.log(result5);
// 34272


const bikes=['yamaga','deo','bulsor','duke'];
const resullt=bikes.filter(item=>item.length > 5);
console.log(resullt);
//['yamaga', 'bulsor']


let bike1=['yamaga','deo','bulsor','duke'];
const resullt1=bike1.filter(item=>item.length < 5);

console.log(resullt);
// ['deo', 'duke']


