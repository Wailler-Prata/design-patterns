import { emailValidatorAdapter } from "./functions/validator";

console.log(emailValidatorAdapter('email.teste@gmail.com')) // => True
console.log(emailValidatorAdapter('email.teste#gmail.com')) // => False