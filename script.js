//Intro to functions in Js, because you aren't getting it.

var dogName = "Rover";
var dogWeight = 23;
if (dogWeight > 20){
console.log(dogName + " says WOOF WOOF!");
} else {
    console.log(dogName + " says woof woof!");
}

dogName = "spot";
dogWeight = 13;
if (dogWeight > 20){
console.log(dogName + " says WOOF WOOF!");
} else{
    console.log(dogName + " says woof woof!");
}

dogName = "spike";
dogWeight = 53;
if(dogWeight > 20){
    console.log(dogName + " says WOOF WOOF!");
}else{
    console.log(dogName + " says woof woof!");
}

dogName = "lady";
dogWeight = 17;
if(dogWeight > 20){
    console.log(dogName + " says WOOF WOOF");
}else{
    console.log(dogName + " says woof woof");
}

//That is super tedious, and we want the code to be simple and DRY(Does not repeat).  All code changes over time, and the repetition will make it difficult.  More changes may mean more mistakes.

function bark(name, weight){
    if(weight > 20){
        console.log(name + " says WOOF WOOF!");
    }else{
        console.log(name + " says woof woof");
    }
}
//now you call the function:
bark("Rover", 23);
bark("Spot", 13);
bark("Spike", 53);
bark("lady", 17);

function whatShallIWear(temp){
    if(temp < 60){
        console.log("Wear a jacket");
    }else if(temp <70){
        console.log("Wear a sweater");
    }else{
        console.log("Wear a t-shirt");
    }
}

whatShallIWear(80);
whatShallIWear(63);
whatShallIWear(50);

//What arguments can you pass to a function?

//You define a function with parameters but call it with an argument.  You'll define your function once but likely call it with many different arguments.

function doIt(param){
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);

//JS passes arguments to a function using pass-by-value.  That means each argument is copied into the parameter variable.

//Step 1:  declare a variable age, and initialize it to the value of 7.

var age = 7;

//step 2:  declare a function addOne, with a parameter named x, that adds 1 to the value of x.

function addOne(x){
    x = x + 1;
}

//step 3: call the function addOne, pass it the variable age as the argument.  The value in age is copied into the parameter x.
addOne(age);

//step 4: now the value of x is incremented by one.  remember x is a copy, so only x is incremented, not age.

//Experiments:
//What happens when we don't pass enough arguments?
function makeTea(cups, tea){
    console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);
//console shows "Brewing 3 cups of undefined"

//what happens when we pass too many arguments?
makeTea(3, "Earl Grey", "hey ma!", 42);
//console shows "Brewing 3 cups of Earl Grey", so it ignored the extra.

//what happens when we have no parameters?
function barkAtTheMoon(){
    console.log("Wooooooooooooo!");
}
barkAtTheMoon();
//Console shows, "Woooooooooo!"

//FUNCTIONS AND RETURNS     
// function bake(degrees){
//     var message;
//     if(degrees > 500){
//         message = "I'm not a nuclear reactor!";
//     }else if(degrees < 100){
//         message = "I'm not a refrigerator!";
//     } else{
//         message = "That's a very comfortable temperature for me.";
//         setMode("bake");
//         setTemp(degrees);
//     }
//     return message;
// }
// var status = bake(350);

function calculateArea(r){
    var area;
    if(r <= 0){
        return 0;
    }else{
        area = Math.PI * r * r;
        return area;
    }
}
var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);


