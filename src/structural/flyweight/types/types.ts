import { Address } from "../classes/address"

export type AddressForDeliveryFactory = {
    neighborhood: string,
    city: string,
    state: string
}

export type TypeDeliveryAddress = {[k: string]: Address}

export type TypeDataDelivery = {
    street: string,
    number: string,
    neighborhood: string,
    city: string,
    state: string
}