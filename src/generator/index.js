function* gen(){
    yield 1; //Permite tener steps
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value); 
console.log(g.next().value); 
console.log(g.next().value); 

//arreglo que vamos a iterar 1x1 con la informacion que tenemos
function* iterate(array){
    for (let value of array){
        yield value
    }
}

const it = iterate(['brandon', 'axel', 'lucia', 'pedro']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);