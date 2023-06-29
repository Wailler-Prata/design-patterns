export interface InterfaceEmployerProtocol{
    id:number
    name:string
    subordinates:InterfaceEmployerProtocol[]
    getSubordinates():InterfaceEmployerProtocol[]
    addSubordinates():void
    removeSubordinates():void
    info():string
}