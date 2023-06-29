import { InterfaceFigureProtocol } from "../interfaces/iFigure";

export class RoundedCircle implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(`Drawing rounded circle`)
    }
}

export class RoundedSquare implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(`Drawing rounded square`)
    }
}

export class RoundedTriangle implements InterfaceFigureProtocol{
    public draw(): void {
        console.log(`Drawing rounded triangle`)
    }
}