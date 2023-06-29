import { InterfaceItemProtocol } from "../interfaces/iItem";
import { InterfacePackingProtocol } from "../interfaces/iPackage";
import { Box } from "./wrapper";

abstract class AbstractBurguer implements InterfaceItemProtocol{
    public readonly abstract id:number
    public readonly abstract name:string
    public readonly abstract price: number
    public type: string = `${this.constructor.name}`
    
    public pack(): InterfacePackingProtocol {
        return new Box()
    }

    public getProperties(): object{
        return {
            name: this.name,
            price: this.price,
            type: this.type,
            packing: this.pack()
        }
    }
}

export class ChikenBuruer extends AbstractBurguer{
    public readonly id:number = 1
    public readonly name: string = 'Chiken Buruer'
    public readonly price: number = 29.99
}

export class MeatBuruer extends AbstractBurguer{
    public readonly id:number = 2    
    public readonly name: string = 'Meat Buruer'
    public readonly price: number = 31.99
}

export class VeganBuruer extends AbstractBurguer{
    public readonly id:number = 3 
    public readonly name: string ='Vegan Buruer'
    public readonly price: number = 31.99
}