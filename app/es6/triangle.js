/**
 * Created by Administrator on 15-4-18.
 */
var Shape = require('./shape');

class Triangle extends Shape {
    constructor (sd1, sd2, sd3){
        let a = 10;
        super();
        this.side = 3;
        this.sd1 = sd1;
        this.sd2 = sd2;
        this.sd3 = sd3;
        console.log(a);
    }

    area (){
        var p = (this.sd1 + this.sd2 + this.sd3) * 0.5;
        return Math.sqrt(p * (p-this.sd1) * (p-this.sd2) * (p-this.sd3));
    }
}

var tg = new Triangle(8,4,5);

console.log(tg.area());
