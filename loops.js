//! Iteración 1
//? Haz un bucle y muestra por consola todos aquellos valores del array 
//? que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
    'Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta',
    'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'
]

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if (product.includes("Camiseta")) {
        console.log(product);
    }
    
}
//! Iteración 2
//?Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad
//?  isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const aluno = alumns[index];
    
    if (aluno.T1 && aluno.T2 === true) {
        console.log(aluno.name + " isApproved")
    }
    else if (aluno.T1 && aluno.T3 === true){
        console.log(aluno.name + " isApproved");
    }
    else if (aluno.T2 && aluno.T3 === true){
        console.log(aluno.name + " isApproved");
    }
    else{
        console.log(aluno.name + " is not approved");
    }
   
    
}

//! Iteración 3
//? Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const country of placesToTravel) {
    console.log(country);
}

//! Iteración 4
//? Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const data in alien) {
    console.log(alien[data]);
}

//! Iteración 5
//? Usa un bucle for para recorrer todos los destinos del array y elimina los 
//? elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel2 = [
    {id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}
];

for (let index = 0; index < placesToTravel2.length; index++) {
    const countrys = placesToTravel2[index];
    
    if (countrys.id === 11 || countrys.id === 40) {
        placesToTravel2.splice(index, 1);
        
    }
    
}
console.log(placesToTravel2);

//! Iteración 6
//? Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
//? Recuerda que puedes usar la función .includes() para comprobarlo.

// const toys = [
//     {id: 5, name: 'Buzz MyYear'}, 
//     {id: 11, name: 'Action Woman'}, 
//     {id: 23, name: 'Barbie Man'}, 
//     {id: 40, name: 'El gato con Guantes'},
//     {id: 40, name: 'El gato felix'}
//     ];

//! Iteración 7
//? Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas 
//? (sellCount) al array popularToys. Imprimelo por consola.

// const popularToys = [];
// const toys2 = [
// 	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
// 	{id: 11, name: 'Action Woman', sellCount: 24}, 
// 	{id: 23, name: 'Barbie Man', sellCount: 15}, 
// 	{id: 40, name: 'El gato con Guantes', sellCount: 8},
// 	{id: 40, name: 'El gato felix', sellCount: 35}
// ];
