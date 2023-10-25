const Shape = require("./shape.js");

class Triangle extends Shape{
    render(){
         return ` <svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    <polygon points="90 10, 180 150, 0 150" fill="${this.color}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                  </svg>
                `        
              }
}
module.exports = Triangle;