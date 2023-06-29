import { AddressFactory } from "./classes/addressFactory"
import { deliveryInfo } from "./dataBase/virtualDataBase"

const addressFactory = new AddressFactory()
deliveryInfo.forEach(address =>{
    const addressObject = addressFactory.createAddress(address)
    addressObject.street = address.street
    addressObject.number = address.number
    console.log(addressObject)
})

console.log('\n\n**************** Addresses objects saved ****************')
console.log(addressFactory.addressList)
