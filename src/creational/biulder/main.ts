import { MakeMeal } from "./classes/makeMeal";

const makeMeal = new MakeMeal()
makeMeal.addItemOnMeal(
    makeMeal.getBurguerInstances("meat"), makeMeal.getDrinkInstances("beer")
)
makeMeal.removeItemOnMeal(makeMeal.getDrinkInstances("beer"))

console.log(makeMeal.getMeal())
console.log(`O custo total é R$ ${makeMeal.getTotalCost()}`)