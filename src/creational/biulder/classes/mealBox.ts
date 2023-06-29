import { InterfaceItemProtocol } from "../interfaces/iItem"

export class MealBox{
    private readonly mealBox: InterfaceItemProtocol[] = []

    public add(...itens:InterfaceItemProtocol[]):void{
        itens.forEach(item =>{
            this.mealBox.push(item)
        })
    }
    
    public remove(...itens:InterfaceItemProtocol[]):void{
        itens.forEach(item =>{
            const index = this.mealBox.findIndex(meal => meal.id === item.id)
            if(index >= 0){
                this.mealBox.splice( index, 1)
            }            
        })
    }

    public listMealItens():InterfaceItemProtocol[]{
        return this.mealBox
    }
}