function sum(num1, num2){
    return num1+num2;
}

function calc(num1,num2, callback){
    return callback(num1,num2);
}

console.log(calc(2, 2, sum)); //Solo se pone sum ya que se lo ponemos en parentesis estaremos llamando la funcion y seria incorrecto

setTimeout(function () {
    console.log("Hola Js");
}, 2000)

function grettin(name){
    console.log("Hola", name);
}

setTimeout(grettin, 2000, 'Brandon');