import { InterfaceDeviceProtocol } from "../interfaces/iDevice";

abstract class Device implements InterfaceDeviceProtocol{
    private _status: boolean = false
    private _volume: number = 0
    private _name: string = ''
    constructor(){
        this.name = this.constructor.name
    }

    get status(): boolean{
        return this._status
    }

    set status(value: boolean){
        this._status = value
    }

    get name(): string{
        return this._name
    }

    set name(value: string){
        this._name = value
    }
    
    get volume(): number{
        return this._volume
    }

    set volume(value: number){
       this._volume = value
       if (this._volume >= 100) this._volume = 100
       if (this._volume <= 0) this._volume = 0
    }
}

export class Tv extends Device{}

export class Radio extends Device{}