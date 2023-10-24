const Circle = require("../lib/circle")
const Square = require("../lib/square")
const Triangle = require("../lib/triangle")

function generateLogo(data){
    let shape = undefined
    if(data.shape === "Circle"){
        shape = new Circle(data.text, data.text_color, data.shape_color)
    }else if (data.shape === "Square"){
        shape = new Square(data.text, data.text_color, data.shape_color)
    }else{
        shape = new Triangle(data.text, data.text_color, data.shape_color)
    }
    return shape.render();
}
    
module.exports = generateLogo;