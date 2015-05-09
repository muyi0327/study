/**
 * Created by Administrator on 15-4-18.
 */
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10


//*************
function do_something() {
    console.log(foo); // ReferenceError
    console.log(typeof foo); // ReferenceError
    let foo = 2;
}

do_something();

//***************8
var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}

console.log(tmp)

//**********88
let foo = 'outer';

function bar(func = x => foo) {
    let foo = 'inner';
    console.log(func()); // outer
}

bar();