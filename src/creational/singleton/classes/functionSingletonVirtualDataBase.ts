import { IUser } from "../interfaces/iUser"

export const VirtualDataBase = (()=>{
    const users: IUser[] = []

    return {
        add(user:IUser): void{
            users.push(user)
        },
        remove(index: number): void{
            users.splice(index, 1)
        },    
        show(): void{
            console.log(`Function Singleton`, users) 
        }
    }
})()