class Dollar {
    private value: number = 1.00;
    //this is a function that uses a "getter" to return the number inside the private field "value" 
    get Value() {
        return this.value;
    }
    getImageUrl (): string {
        return "img/dollar.jpg";
    }

}
 var coin = new Dollar() ;
 var value = coin.Value;

/** modeling a real-world obejct by creating a class is called "abstracton"  */