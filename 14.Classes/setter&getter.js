class square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    //Its a property for square class not function
    get area(){
        return this.height * this.width;
    }

    set area(value){
        this.width = Math.sqrt(value);
        this.height = this.width;
    }
}

let square1 = new square(6);
console.log(square1.area);

square1.area = 25;
console.log(square1.width);
console.log(square1.height);