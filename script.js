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

//That is super tedious, and we want the code to be simple and DRY(Does not repeat).  All code changes over time, and the repetition will make it difficult.

