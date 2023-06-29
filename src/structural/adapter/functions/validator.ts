import isEmail from 'validator/lib/isEmail';
import { InterfaceValidatorFnProtocol } from '../interfaces/iEmailValidator';

export const emailValidatorAdapter:InterfaceValidatorFnProtocol = (email:string): boolean =>{
    return isEmail(email)
}