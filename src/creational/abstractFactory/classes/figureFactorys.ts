import { InterfaceFigureFactoryProtocol } from "../interfaces/iFactory";
import { InterfaceFigureProtocol } from "../interfaces/iFigure";
import { Circle, Square, Triangle } from "./figures";
import { RoundedCircle, RoundedSquare, RoundedTriangle } from "./roundedFigure";

class FigureFactory implements InterfaceFigureFactoryProtocol{
    public getFigure(figure:string): InterfaceFigureProtocol {
        const figures:any = {
            circle: new Circle(),
            square: new Square(),
            triangle: new Triangle()
        }
        return figures[figure.toLowerCase()]
    }
}

class RoundedFigureFactory implements InterfaceFigureFactoryProtocol{
    public getFigure(figure:string): InterfaceFigureProtocol {
        const figures:any = {
            circle: new RoundedCircle(),
            square: new RoundedSquare(),
            triangle: new RoundedTriangle()
        }
        return figures[figure.toLowerCase()]
    }
}

export class FactoryFigureProducer{
    public getFactory(rounded:boolean): InterfaceFigureFactoryProtocol{
        if(rounded){
            return new RoundedFigureFactory()
        }
        return new FigureFactory()
    }
}