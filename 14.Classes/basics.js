class Rectangle {

    constructor(_height, _width, _color) {
        this.height = _height;
        this.width = _width;
        this.color = _color;
    }

    getArea(){
        return this.height * this.width;
    }
}

let myRectangle1 = new Rectangle(3, 5, "blue");
let myRectangle2 = new Rectangle(6, 7, "red");

console.log(myRectangle1.getArea(), myRectangle1.height);
console.log(myRectangle2.getArea(), myRectangle2.width);