export interface InterfaceRemoteControlProtocol{
    togglePower():void
}

export interface InterfaceRemoteControlWithVolumeProtocol{
    togglePower():void
    turnDownVolume():void
    turnUpVolume():void
}