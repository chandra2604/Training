//currying
function curry(f){
    return function(a){
        return function(b){
            return f(a,b);
        };
    };
}
function sum(a, b){
    return a + b;
}
let curriedsum = curry(sum);
alert (curriedsum (1)(2));

  //scope
  {
    let result="Hiii";
    alert(result);
  }
 // alert(result);  //not defined

 {let namee="chandra"
  alert(namee)
}
{
    let namee="pavni";
    alert(namee);
}


  for(let i = 0; i < 3 ; i++){
    alert(i);
  }
 // alert(i);

 
  function makeCount(){
    let count=5;
    return function(){
        return count++;
    };
  }
  let counter=makeCount();
alert(counter());
alert(counter());


  
  

 
