//function
let userName="siva";
function showmessage(){
   let userName="gopi";
    let message = ' hello ' + userName;
    alert(message);
}
//alert(userName);
showmessage();
alert(userName);

//return value
function sum(a,b){
    return a*b;
}
let result=sum(5,6);
alert(result);

function checkAge(aa){
    if(aa>=18){
        return true;
    }
    else{
        return confirm( 'do u permission ur parents?' );
    }
}

let age = prompt( 'how old are u?', 18 );
if(checkAge(age)){
    alert( 'access granted' );
}
else{
    alert( 'access denied' );
}

function doNothing() { 
return;
}
alert( doNothing() === undefined );

//function -constructor

function Person(name){
    this.name=name;
    this.greeting=false;
     console.log( `my name is ${this.name}`);
    }

let per = new Person("chandra");
alert(per.name);

      
function BigUser() {
     this.name = "John";
     return { name: "Godzilla" };  
  }
   alert( new BigUser().name );

   
   //fuction-call

   const Son={
    fullName:function(){
        return this.firstname + " " + this.lastname;
    }
}
    const son1={
        firstname:'chandra',
        lastname:'regina'
    }
    const son2={
        firstname:'ramya',
        lastname:'krishanan'
    }
alert(Son.fullName.call(son2));


//call()-method with arguments

const Details={
    fullname:function(city,state){
        return this.firstname+ " "+ this.lastname + ",<br>"+city+ ",<br>" + state;
    }
}
const Detail1={
    firstname:"dhivya",
    lastname:"arasu"
}
document.getElementById("demo1").innerHTML=Details.fullname.call(Detail1,"Thoothukudi","Tamilnadu.");

//apply()-method function

const contact = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const contact1 = {
    firstName:"Ananya",
    lastName: "ganesh"
  }
  
  alert(contact.fullName.apply(contact1, ["London", "US"]));

  //largest No-apply()
  document.getElementById("demo2").innerHTML = Math.max.apply(Math, [1,2,3]); 




