import { InterfaceItemProtocol } from "../interfaces/iItem"
import { InterfacePackingProtocol } from "../interfaces/iPackage"
import { Bottle } from "./wrapper"

abstract class AbstractDrink implements InterfaceItemProtocol{

    public readonly abstract id:number
    public readonly abstract name:string
    public readonly abstract price: number
    public type: string = `${this.constructor.name}`
    
    public pack(): InterfacePackingProtocol {
        return new Bottle()
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

export class Beer extends AbstractDrink{
    public readonly id:number = 4    
    public readonly name: string = 'Beer'
    public readonly price: number = 9.99
}

export class Wine extends AbstractDrink{ 
    public readonly id:number = 5   
    public readonly name: string = 'Wine'
    public readonly price: number = 70.99
}

export class Juice extends AbstractDrink{
    public readonly id:number = 6      
    public readonly name: string = 'Juice'
    public readonly price: number = 5.99
}
