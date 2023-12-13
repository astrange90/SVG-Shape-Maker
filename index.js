const inquirer = require('inquirer');


const {Circle, Square, Triangle} = require('./lib/shapes.js');

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }

}

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Enter a Color/Hexadecimal number:",
    },
    {
        type: "input",
        name: "shape",
        message: "Color of Shape: Enter a Color/Hexadecimal number:",
    },
    {
        type: "list",
        name: "Shapes",
        message: "Choose a Shape?",
        choices: ["Circle", "Square", "Triangle"],
    },
];


function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("SVG Successfully Generated");
    });
}

init();