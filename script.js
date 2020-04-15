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