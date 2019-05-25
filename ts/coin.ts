abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string
}

class Dollar extends Coin {
    constructor () {
        super(1.00);
    }
    getImageUrl (): string {
        return "img/dollar.jpg";
    };

}
class tenp extends Coin{
   constructor() {
       super(0.10);
   }
    getImageUrl() {
        return "img/10p.jpg";
    };
}
class fiftyp extends Coin{
   constructor() {
       super(0.50);
   }
    getImageUrl() {
        return "img/50p.jpeg";
    };
}
class twentyp extends Coin{
   constructor() {
       super(0.20);
   }
    getImageUrl() {
        return "img/20p.jpeg";
    };
}

 