
let cars = [ "BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var ie;
for(ie = 0; ie < cars.length; ie++ ){
    text += cars[ie] + "<br>";
};

document.getElementById("demo").innerHTML = text;

let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let randomtext = ""
let  i ;

for( i = 0; i< days.length; i++ ){
    randomtext += days[i] + "<br>";
}
document.write(days)
// document.write('hey')
console.log('helllo')

// CLOSURES //

function someFunction (){
    var a = 4;
    document.getElementById("click").innerHTML = a*a;
    console.log('clicked')
}


function learnMore () {
    var message = "this is the main message body";
    var someMessage = "Thank You ! <br> You clicked the button to learn more about us !"
    document.getElementById("some").innerHTML = `${someMessage} <br> ${message}`; 
}


document.getElementById('demooo').innerHTML = add();

function add() {
    var counter  = 0;
    function plus() {counter += 2;}
    plus()
    return counter;
}


var add = function() {
    var counter = 0;
    return function() {
        counter += 1;
         return counter }
}();

function anotherFunction() {
    document.getElementById('anotherdemo').innerHTML = add()
}


// var count = 0;
// var add2  = function(){
//     if (count === 0){
//         document.getElementsByClassName('dddd').innerHTML = 'Out Of Stock'
//     }else {
//         document.getElementsByClassName('dddd').innerHTML = 'Available'
//     }
    
//     return function(){
//         count += 1;
//         return count;
//     }
// }();
// function anotherFunction(){
//     document.getElementById('anotherdemo').innerHTML = add2()
// }


// ASYNC AWAIT //

async function f() {
    let promise = new Promise ((resolve , reject ) => {
        setTimeout(() => resolve('Done'), 3000)
    });
    let result  = await promise;
    alert(result)
}f()