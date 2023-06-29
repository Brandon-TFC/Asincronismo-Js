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