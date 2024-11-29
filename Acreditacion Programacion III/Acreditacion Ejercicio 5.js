let bandas = [
    "Metallica",
    "Iron Maiden",
    "Pink Floyd",
    "Led Zeppelin",
    "Nirvana",
    "Queen",
    "AC/DC",
    "The Beatles",
    "Radiohead",
    "Pearl Jam"
];


console.log("Tercero:", bandas[2]); 
console.log("Cuarto:", bandas[3]);  
console.log("Séptimo:", bandas[6]); 

bandas[1] = "Foo Fighters"; 
bandas[2] = "Arctic Monkeys"; 
console.log("Array modificado:", bandas);

bandas.push("Red Hot Chili Peppers");
console.log("Array actualizado:", bandas);

console.log("Longitud del array:", bandas.length);

bandas.sort();
console.log("Array ordenado alfabéticamente:", bandas);

console.log("Recorriendo el array:");
for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i]);
}