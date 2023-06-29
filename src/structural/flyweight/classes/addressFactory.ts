import { AddressForDeliveryFactory, TypeDataDelivery, TypeDeliveryAddress } from "../types/types"
import { Address } from './address'

export class AddressFactory{
    public addressList: TypeDeliveryAddress = {}
    constructor(){
    }

    private generateAddressKey(intrinsicFieldsAddress: AddressForDeliveryFactory): string{
        return Object.values(intrinsicFieldsAddress)
            .map(value => value.replace(/\s+/, '').toLowerCase())
            .join('_')
    }

    private generateIntrinsicFieldsAddress(dataDelivery: TypeDataDelivery): AddressForDeliveryFactory{
        return {
            neighborhood: dataDelivery.neighborhood, 
            city: dataDelivery.city, 
            state: dataDelivery.state
        }
    }    

    public createAddress(dataDelivery: TypeDataDelivery): Address{
        const intrinsicFieldsAddress: AddressForDeliveryFactory = this.generateIntrinsicFieldsAddress(dataDelivery)
        const addressKey = this.generateAddressKey(intrinsicFieldsAddress)

        if(addressKey in this.addressList){
            return this.addressList[addressKey]
        }

        return this.addressList[addressKey] = new Address(
            intrinsicFieldsAddress.neighborhood, 
            intrinsicFieldsAddress.city, 
            intrinsicFieldsAddress.state
        )
    }
}