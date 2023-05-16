const nomes = ['Joao', 'Guilherme', 'Julia', 'Amanda', 'Camila', 'Pedro', 'Felipe', 'Carlos', 'Flávia', 'Thaís', 'Davi', 'Mariana'];

console.log("tamanho da array:", nomes.length);

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);