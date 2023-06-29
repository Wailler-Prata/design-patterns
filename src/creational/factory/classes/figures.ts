import { InterfaceFigureProtocol } from "../interfaces/iFigure";

export class Circle implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(
            '\n'+
            '  *  *  \n' +
            '*      *\n' +
            '  *  *  \n' 
        )
    }
}

export class Square implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(
            '\n'+
            '*  *  * \n' +
            '*     * \n' +
            '*  *  * \n' 
        )
    }
}

export class Triangle implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(
            '\n'+
            '   *   \n' +
            ' *   * \n' +
            '*  *  * \n' 
        )
    }
}