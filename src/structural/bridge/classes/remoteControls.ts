import { InterfaceDeviceProtocol } from "../interfaces/iDevice";
import { InterfaceRemoteControlProtocol, InterfaceRemoteControlWithVolumeProtocol } from "../interfaces/iRemoteControl";

export class RemoteControl implements InterfaceRemoteControlProtocol {
    constructor(protected device: InterfaceDeviceProtocol){}
    
    togglePower(): void {
        this.device.status = !this.device.status
    }
}

export class RemoteControlWithVolume extends RemoteControl implements InterfaceRemoteControlWithVolumeProtocol {

    turnDownVolume(): void {
        this.device.volume = this.device.volume - 10
    }
    turnUpVolume(): void {
        this.device.volume = this.device.volume + 10
    }
}