import { InterfaceRemoteControlProtocol, InterfaceRemoteControlWithVolumeProtocol } from "../interfaces/iRemoteControl"

export class Client{
    constructor(private abstraction: InterfaceRemoteControlProtocol | InterfaceRemoteControlWithVolumeProtocol){}

    togglePower(){
        this.abstraction.togglePower()
    }
    
    turnUpVolume(){
        if('turnDownVolume' in this.abstraction){
            this.abstraction.turnUpVolume()
        }
    }

    turnDownVolume(){
        if('turnDownVolume' in this.abstraction){
            this.abstraction.turnDownVolume()
        }
    }
}