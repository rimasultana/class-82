function myDisplayer(something) {
    console.log(something);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

  setInterval(myFunction, 3000);

  function myFunction(){
    console.log("I Love You!!!");
  }


  setTimeout(function(){
    myFunction("I Heat You!!!");
  }, 3000);
  function myFunction(value){
    console.log(value);
  }