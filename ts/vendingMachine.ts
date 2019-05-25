/// <reference path="./coin.ts" />

class VendingMachine {
    private paid = ko.observable(0);
    acceptedCoins: Dollar[] = [new Dollar()]
    acceptCoin = (coin: Dollar): void  => {
        let oldTotal = this.paid()
        this.paid(oldTotal + coin.Value)
        
    }
    /** "this" refers to the class, because this is an arrow function.
     * when a coin is accepted, the value of the coin is added to the "paid" count
     */
}