console.log("object.js");

const cupcake = {
    color : ["pink", "white", "brown"],
    flavor : "chocolate",
    size : "mini",
    icing : "true",
    calories : 0,
    eatCupcake : ()=>{
        console.log("yum");
    }
}


console.log("our cupcake is the color of ", cupcake.color[0]);

cupcake.color.forEach(color => {
    console.log("Color of cupcake is ", color);
})
//Alternative method of logging
cupcake.color.forEach(color => {
    console.log(`again, the color is ${color}`);
})

//C++ style of string concat works also
cupcake.color.forEach(color => {
    console.log("yet again, the color is " + color + "!!");
})
