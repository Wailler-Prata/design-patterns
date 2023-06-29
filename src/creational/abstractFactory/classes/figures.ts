import { InterfaceFigureProtocol } from "../interfaces/iFigure";

export class Circle implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(`Drawing circle`)
    }
}

export class Square implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(`Drawing circle`)
    }
}

export class Triangle implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(`Drawing circle`)
    }
}