import { InterfaceShapeProtocol } from "../interfaces/iShape";

export class Shape implements InterfaceShapeProtocol{
    draw(): string {
        return 'Desenhando forma'
    }
}

export class ShapeRoundedDecorator implements InterfaceShapeProtocol{
    private readonly shape:InterfaceShapeProtocol = new Shape()
    draw(): string {
        return `${this.shape.draw()} aredondado`
    }
}