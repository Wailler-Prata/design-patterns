import { InterfaceShapeProtocol } from "../interfaces/iShape"
import { Circle, Square, Triangle } from "./shapes"

export class ShapeMakerFacade{
    private circle: InterfaceShapeProtocol = new Circle()
    private square: InterfaceShapeProtocol = new Square()
    private triangle: InterfaceShapeProtocol = new Triangle()

    public drawCircle(): string {
        return this.circle.draw()
    }

    public drawSquare(): string {
        return this.square.draw()
    }

    public drawTriangle(): string {
        return this.triangle.draw()
    }
}