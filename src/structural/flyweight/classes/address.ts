import { InterfaceAddressProtocol } from "../interfaces/iAddress"

export class Address implements InterfaceAddressProtocol{
    private _street: string | null = null
    private _number: string | null = null
    constructor(
        
        private _neighborhood: string,
        private _city: string, 
        private _state: string,   
    ){}

    set street(value: string){
        this._street = value
    }
    get street(): string | null{
        return this._street
    }

    set number(value: string){
        this._number = value
    }
    get number(): string | null{
        return this._number
    }

    set neighborhood(value: string){
        this._neighborhood = value
    }
    get neighborhood(): string{
        return this._neighborhood
    }

    set city(value: string){
        this._city = value
    }
    get city(): string{
        return this._city
    }

    set state(value: string){
        this._state = value
    }
    get state(): string{
        return this._state
    }
}