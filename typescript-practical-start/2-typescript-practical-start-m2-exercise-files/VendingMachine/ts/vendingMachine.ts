/// <reference path="./coin.ts" />

class vendingMachine {
    private paid = 0
    acceptCoin = (coin: Quarter): void => {
        this.paid = this.paid + coin.value
        var element = document.getElementById("total")
        element.innerHTML = this.paid.toString()
    }
}