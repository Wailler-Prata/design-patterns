import { InterfaceFigureProtocol } from "../interfaces/iFigure";
import { Circle, Square, Triangle } from "./figures";

export class FigureFactory{
    
    public getFigure(figure:string): InterfaceFigureProtocol{
        const figures:any = {
            circle: new Circle(),
            square: new Square(),
            triangle: new Triangle()
        }
        return figures[figure.toLowerCase()]
    }
}