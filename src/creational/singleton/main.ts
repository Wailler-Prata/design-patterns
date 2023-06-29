import { VirtualDataBase as ClassSingleton } from "./classes/classSingletonVirtualDataBase"
import { VirtualDataBase as FunctionSingleton } from "./classes/functionSingletonVirtualDataBase"

const classicSingleton = ClassSingleton.instance
const anotherClassicSingleton = ClassSingleton.instance

classicSingleton.add({name: "Buzz", age: 28})
anotherClassicSingleton.show() // Classe Singleton VirtualDataBase [ { name: 'Buzz', age: 28 } ]


const functionSingleton = FunctionSingleton
const anotherFunctionSingleton = FunctionSingleton

functionSingleton.add({name: "Woody", age: 28})
anotherFunctionSingleton.show() // Function Singleton [ { name: 'Woody', age: 28 } ]