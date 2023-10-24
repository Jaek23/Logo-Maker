class Shape{
    constructor(text, textColor, color){
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }

    setColor(color){
        this.color = color
    }

    setText(text){
        this.text = text
    }

    setTextColor(textColor){
        this.textColor = textColor
    }
}

module.exports = Shape;