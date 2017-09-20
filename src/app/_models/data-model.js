"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealer = (function () {
    function Dealer() {
        this.id = 0;
        this.name = '';
    }
    return Dealer;
}());
exports.Dealer = Dealer;
var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
    }
    return Address;
}());
exports.Address = Address;
var Contact = (function () {
    function Contact() {
        this.mobile = '';
        this.phone = '';
    }
    return Contact;
}());
exports.Contact = Contact;
var Product = (function () {
    function Product(productId, name, category, description, price) {
        this.productId = productId;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
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
exports.states = ['Maharashra', 'Goa', 'UP', 'Punjab'];
//# sourceMappingURL=data-model.js.map