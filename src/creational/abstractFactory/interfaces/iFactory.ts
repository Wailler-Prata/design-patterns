import { InterfaceFigureProtocol } from "./iFigure";

export interface InterfaceFigureFactoryProtocol{
    getFigure(figure:string): InterfaceFigureProtocol
}