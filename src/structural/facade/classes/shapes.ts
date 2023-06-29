import { InterfaceShapeProtocol } from "../interfaces/iShape";

abstract class Shape implements InterfaceShapeProtocol{
    draw(): string {
        return `Drawling ${this.constructor.name.toLowerCase()}`
    }
}

export class Circle extends Shape{}

export class Square extends Shape{}

export class Triangle extends Shape{}