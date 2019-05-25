"use strict";
var Dollar = /** @class */ (function () {
    function Dollar() {
        this.value = 1.00;
    }
    Object.defineProperty(Dollar.prototype, "Value", {
        //this is a function that uses a "getter" to return the number inside the private field "value" 
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Dollar.prototype.getImageUrl = function () {
        return "img/coin.png";
    };
    return Dollar;
}());
var coin = new Dollar();
var value = coin.Value;
/** modeling a real-world obejct by creating a class is called "abstracton"  */ 
/// <reference path="coin.ts" />
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
        /** "this" refers to the class, because this is an arrow function.
         * when a coin is accepted, the value of the coin is added to the "paid" count
         */
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
//# sourceMappingURL=app.js.map