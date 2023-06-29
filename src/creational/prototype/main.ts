import { Pessoa } from "./classes/pessoa"

const pessoa = new Pessoa("Wailler", 28)
const anotherPerson = pessoa.clone()

console.log(pessoa.isPrototypeOf(anotherPerson)) //true
