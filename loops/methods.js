/* .forEach( function(iterator, index, lista) ) // no retorna nada */

list = ["hola","nose"]
personas = [
    {   
        "name": "torreNegra",
        "phone": 19854156
    },
    {
        "name": "amr",
        "phone": 123
    }
]

personas.forEach((persona, index) => {
    if (index == 0) {
        personas[index]["phone"] = 0
    }
});

personas.forEach( person => {console.log(person);})

/* .map( function(iterator) ) // retorna una nueva lista que depende de la funcion */

listNum = [0,1,2,4,5,3,6] 

listdoble = listNum.map((num)=>{
    if (num%2 == 0) {
        return 0
    } 
})

console.log(listdoble);
console.log(listNum);

/* .filter( function(iterator) ) // retorna una nueva lista que depende de la funcion */

listPar = listNum.filter((num)=>{
    return num%2==0
})

console.log(listPar);
console.log(listNum);

/* .reduce( function(acum,iterator) ) // retorna una nueva lista que depende de la funcion */
result = listNum.reduce((acum, iterador)=>{
    console.log(iterador);
    return acum+iterador
})

console.log(result);