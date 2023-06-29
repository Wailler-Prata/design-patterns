import { InterfacePackingProtocol } from "./iPackage"

export interface InterfaceItemProtocol{
    id:number
    name:string
    price:number    
    type:string
    pack():InterfacePackingProtocol
    getProperties(): object
}