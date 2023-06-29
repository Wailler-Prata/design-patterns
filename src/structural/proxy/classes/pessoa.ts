import { InterfaceProtocolPessoa } from "../interfaces/iPeople";

export class People implements InterfaceProtocolPessoa{
    constructor(private _id: number, private _name: string, private _age: number){}

    set id(value: number) {
        this._id = value
    }

    get id(): number {
        return this._id
    }

    set name(value: string) {
        this._name = value
    }

    get name(): string{
        return this._name
    }

    set age(value: number) {
        this._age = value
    }

    get age(): number{
        return this._age
    }

    info(): object{
        return {id: this.id, name: this.name, age: this.age}
    }
}


