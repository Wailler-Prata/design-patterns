import { Client } from "./classes/client";
import { Radio, Tv } from "./classes/devices";
import { RemoteControl, RemoteControlWithVolume } from "./classes/remoteControls";

// Remote control with volume
const radio = new Radio()
const radioRemoteControl = new RemoteControlWithVolume(radio)
const cliente = new Client(radioRemoteControl)

console.log(`Before power up : [Device: Radio, Status:, ${radio.status}, Volume:, ${radio.volume}]`)
cliente.togglePower(); cliente.turnUpVolume(); cliente.turnUpVolume(); cliente.turnDownVolume()
console.log(`After power up : [Device: Radio, Status:, ${radio.status}, Volume:, ${radio.volume}]\n`)


// Remote control without volume
const tv = new Tv()
const tvRemoteControl = new RemoteControl(tv)
const anotherCliente = new Client(tvRemoteControl)

console.log(`Before power up : [Device: Tv, Status:, ${tv.status}, Volume:, ${tv.volume}]`)
anotherCliente.togglePower(); anotherCliente.turnUpVolume(); anotherCliente.turnUpVolume(); anotherCliente.turnDownVolume()
console.log(`After power up : [Device: Tv, Status:, ${tv.status}, Volume:, ${tv.volume}]`)
