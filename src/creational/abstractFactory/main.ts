import { FactoryFigureProducer } from "./classes/figureFactorys";

const factoryProducer = new FactoryFigureProducer()
const figure = factoryProducer.getFactory(false).getFigure('Square')
figure.draw()