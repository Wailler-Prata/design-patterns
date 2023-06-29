import { InterfaceItemProtocol } from "../interfaces/iItem"
import { ChikenBuruer, MeatBuruer, VeganBuruer } from "./burguers"
import { Beer, Juice, Wine } from "./drinks"
import { MealBox } from "./mealBox"

export class MakeMeal{

    private mealBox = new MealBox()

    public addItemOnMeal(... itens:InterfaceItemProtocol[]):void{    
        itens.forEach(item=>{
            this.mealBox.add(item)
        })       
    }

    public removeItemOnMeal(... itens:InterfaceItemProtocol[]):void{    
        itens.forEach(item=>{
            this.mealBox.remove(item)
        })       
    }

    public getMeal(): InterfaceItemProtocol[]{
        return this.mealBox.listMealItens()
    }

    public getTotalCost():number{
        return this.mealBox.listMealItens().reduce((sum, item) => sum += item.price, 0)
    }

    public getDrinkInstances(drink:string): InterfaceItemProtocol{
        const obj:any = {
            beer: new Beer(),
            wine: new Wine(),
            juice: new Juice()
        }
        return obj[drink.toLowerCase()]
    }

    public getBurguerInstances(burguer:string): InterfaceItemProtocol{
        const obj:any = {
            vegan: new VeganBuruer(),
            meat: new MeatBuruer(),
            chiken: new ChikenBuruer()
        }
        return obj[burguer.toLowerCase()]
    }
}