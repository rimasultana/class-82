function myDisplayer(some){
    console.log(some);
}



function myFirst(){
    myDisplayer("Hello");
}
function mySeconsd(){
    myDisplayer("Goodbye");
}

myFirst();
mySeconsd();


function disply(some){
    console.log(some);
}

function claculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback (sum);
}

let result = claculator(10, 10, disply);
