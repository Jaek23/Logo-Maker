const Circle = require("../lib/circle")
const Square = require("../lib/square")
const Triangle = require("../lib/triangle")

function generateLogo(data){
    let shape = " ";
    if(data.shape === "Circle"){
        shape = new Circle(data.text, data.textcolor, data.shapecolor)
    }else if (data.shape === "Square"){
        shape = new Square(data.text, data.textcolor, data.shapecolor)
    }else{
        shape = new Triangle(data.text, data.textcolor, data.shapecolor)
    }
    return shape.render();
}
    
module.exports = generateLogo;