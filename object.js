
//Hoisting
function isRight(){
    if(true){
        var result="Right";
    }
    alert(result);

    alert(person);
    var person="chandra";
    alert(person);
}
isRight();

(function(){
    var message="Hiii i am chandra";
    alert(message);
})();     //Immiteate invoke

let user={name:"chandra",
          age:22
         };
         

         //object-reference,copying and comparing
let admin=user;
admin.name="ananya";
alert(user.name);

let a={};
let b=a;
alert(a==b);

let c={};
let d={};
alert(c==d);

const user1={name1:"ramya",
        des:"developer"};
        user1.des="trainee";
        alert(user1.des);

        //'for' in loop
        let format={
            NAme:"Bhuvi",
            Age:23,
            isAdmin:true
        };
        for(let key in format){
            alert(key);      //keys-Name,Age,isAdmin
            alert(format[key]);  //values for the keys-Bhuvi,23,true
        }

        //orederd in object
        let Members={
            "43":"loan",
            "23":"commitment",
            "36":"process"
        };
        for(let member in Members){
            alert(member);
            //alert(Members[member])
        }


   //cloning
   let employee={name2:"Bhavani",
                  age:24,
                  des:"developer"
} 
let clone={};
for(let key in employee){
    clone[key]=user[key];
}
clone.name="Bhavni";
alert(employee.name2);






//object.assign method
let detail={id:1234}
let condi1={time:12};
let condi2={des2:"emp"};
Object.assign(detail,condi1,condi2);
alert(detail.id);
alert(detail.time);
alert(detail.des2);


let proper={name3: "regina" };
Object.assign(proper, {name3: "Thanya" });
alert(proper.name3);

//concat
let namee="chandra";
let msg= " Helloo " + namee + " I'm learning javaScripts! ";
console.log(msg)
alert(msg);

//functions
  function concatuser(FirstName,lastName){
    //set of statement
           let msg= " Helloo " + FirstName + " " + lastName +  " I'm learning javaScripts! ";
          console.log(msg);
}
           concatuser( "regina","chandra");
            concatuser( "sermadurai");
       
            function add(number1, number2){
            // console.log(number1 + number2);
            result=number1 + number2;

}
         add(56,4);
         alert(result);
           
//to ptototype chain
const myobject={
    city: "chennai",
    greet() {
        
        console.log(`Greetings from ${this.city}`);
        alert(`Greetings from ${this.city}`);
 },
};
myobject.greet();

//getprototypeof- object
const myDate=new Date();
let object=myDate;
do{
    object=Object.getPrototypeOf(object);
    console.log(object);
}while(object);








