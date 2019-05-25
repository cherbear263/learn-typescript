/// <reference path="coin.ts" />

class VendingMachine {
    private paid: number = 0;
    acceptCoin = (coin: Dollar): void  => {
        this.paid = this.paid + coin.Value;
    }
    /** "this" refers to the class, because this is an arrow function.
     * when a coin is accepted, the value of the coin is added to the "paid" count
     */
}