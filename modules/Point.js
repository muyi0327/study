/**
 * Created by Administrator on 15-4-18.
 */
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '('+this.x+', '+this.y+')';
    }

}

var p = new Point(1,3);
console.log(p);