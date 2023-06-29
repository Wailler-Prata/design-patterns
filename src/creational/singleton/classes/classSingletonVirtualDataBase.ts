import { IUser } from "../interfaces/iUser"

export class VirtualDataBase {
    private static _driverInstance: VirtualDataBase | null = null
    private users: IUser[] = []

    public static get instance(): VirtualDataBase{
        if(VirtualDataBase._driverInstance === null){
            VirtualDataBase._driverInstance = new VirtualDataBase()
        }
        return VirtualDataBase._driverInstance
    }

    public add(user:IUser): void{
        this.users.push(user)
    }
    public remove(index: number): void{
        this.users.splice(index, 1)
    }

    public show(): void{
        console.log(`Classe Singleton ${this.constructor.name}`, this.users) 
    }
}