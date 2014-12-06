/**
 * Created by muyi on 14-9-16.
 */

var animal = new Object();

animal.name = "dog";
animal.leg = 4;
animal.color = 'yellow';

animal.say = function(){
    console.log(this.name + ':wang wang!');
}

animal.say();
