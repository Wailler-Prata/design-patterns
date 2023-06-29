import { InterfacePackingProtocol } from "../interfaces/iPackage";

export class Box implements InterfacePackingProtocol{
    pack(): string {
        return 'Box'
    }    
}

export class Bottle implements InterfacePackingProtocol{
    pack(): string {
        return 'Bottle'
    }    
}