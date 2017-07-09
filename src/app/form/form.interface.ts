export interface CheckoutForm {
    personal: {
        firstname: string,
        lastname: string,
        telephone?: number,
        emailaddress?: string
    },
    address: {
        addressline: string,
        city: string,
        country: string,
        zipcode: any
    },
    subscriptions: {
        exclusiveOffers?: boolean,
        privacyPolicy: boolean
    }
}
