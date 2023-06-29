import { InterfaceCloneProtocol } from "../interfaces/iClone";

export class Pessoa implements InterfaceCloneProtocol{
    constructor(public name:string, public age:number){}

    public clone(): this{
        return Object.create(this)
    }
}
