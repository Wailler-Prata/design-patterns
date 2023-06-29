import { InterfaceEmployerProtocol } from "../interfaces/iEmployer";

export class Employer implements InterfaceEmployerProtocol{
    public readonly subordinates: InterfaceEmployerProtocol[] = []

    constructor(public readonly id:number, public readonly name:string, private readonly position:string){}

    public addSubordinates(...employers: InterfaceEmployerProtocol[]):void{
        employers.forEach(employer =>{
            this.subordinates.push(employer)
        })
    }

    public removeSubordinates(...employers: InterfaceEmployerProtocol[]):void{
        employers.forEach(employer => {
            const index = this.subordinates.findIndex(subordinate => subordinate.id === employer.id)
            if(index >= 0){
                this.subordinates.splice(index, 1)
            }
        })
    }
    
    public getSubordinates(): InterfaceEmployerProtocol[] {
        return this.subordinates
    }

    public info():string{
        return `${this.constructor.name} [id: ${this.id}, name: ${this.name}, position: ${this.position}]`
    }
}