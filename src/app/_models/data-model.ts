export class Dealer {
    id = 0;
    name = '';
    addresses: Address[];
}

export class Address {
    street = '';
    city = '';
    state = '';
}

export class Contact {
    mobile = '';
    phone = '';
}

export class Product {
    constructor(
        public productId?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number) { }
}
//export const dealers: Dealer[] = [
//    {
//        id: 1,
//        name: 'Sameer Honda',
//        addresses: [
//            { street: '123 Main', city: 'Mumbai', state: 'Maharashra' },
//            { street: '456 Maple', city: 'Panji', state: 'Goa' },
//        ]
//    },
//    {
//        id: 2,
//        name: 'Aditya Bajaj',
//        addresses: [
//            { street: '789 Elm', city: 'Chandigadh', state: 'Punjab' },
//        ]
//    },
//    {
//        id: 3,
//        name: 'Royal ME',
//        addresses: []
//    },
//];

export const states = ['Maharashra', 'Goa', 'UP', 'Punjab'];