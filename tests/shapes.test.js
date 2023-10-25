const Circle = require("../lib/circle");
//const Sqaure = require("../lib/square");
//const Triangle = require("../lib/triangle");

describe('Circle', ()=>{
    it('should render the shape circle', ()=>{
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        var text = ('hi')
        shape.setText(text);
        var textColor = ('green')
        shape.textColor = (textColor);
        expect(shape.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `)
    });                                               
});