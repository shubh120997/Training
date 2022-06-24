class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static isValid(width,height){
        return width === height;
    }

    static equals(a, b){
        return a.height*a.width === b.height*b.width;
    }
}

console.log(Square.isValid(6,6));

let square1 = new Square(6);
let square2 = new Square(7);

console.log(Square.equals(square1, square2));
