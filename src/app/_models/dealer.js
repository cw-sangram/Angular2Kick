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
        this.zip = '';
    }
    return Address;
}());
exports.Address = Address;
exports.dealers = [
    {
        id: 1,
        name: 'Sameer Honda',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
    },
    {
        id: 2,
        name: 'Aditya Bajaj',
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
    },
    {
        id: 3,
        name: 'Royal ME',
        addresses: []
    },
];
exports.states = ['Maharashra', 'Goa', 'UP', 'Punjab'];
//# sourceMappingURL=dealer.js.map