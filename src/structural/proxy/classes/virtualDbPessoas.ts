
export class PeopleDb{
    async getPeoples(): Promise<any[]>{
        return new Promise((resolve, reject) =>{
            return setTimeout(()=>{
                return resolve(VirtualDBPessoas)
            }, 1000);
        })
    }
}


export const VirtualDBPessoas = [
    {
        id: 1,
        name: "john",
        age:23
    },
    {
        id: 2,
        name: "Mary",
        age: 25
    },
    {
        id: 3,
        name: "Peter",
        age:28
    }
]