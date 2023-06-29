
import { InterfaceProtocolPessoa } from "../interfaces/iPeople";
import { People } from "./pessoa";
import { PeopleDb, VirtualDBPessoas } from "./virtualDbPessoas";

export class PeopleDbProxy{
    private listPeople: InterfaceProtocolPessoa[] = new Array()

    async getPeople(): Promise<InterfaceProtocolPessoa[]>{
        const peoples = await new PeopleDb().getPeoples()

        if (this.listPeople.length === 0){
            peoples.forEach(people => {
                this.listPeople.push(new People(people.id, people.name, people.age))
            })
        }
        return this.listPeople
    }
}