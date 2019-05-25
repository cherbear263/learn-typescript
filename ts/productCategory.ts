abstract class ProductCategory{
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name = "Soda"
    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}
class LollyCategory extends ProductCategory {
    name = "Lolly"
    getImageUrl() {
        return this.imgPath + "lolly.png";
    }
}
class ChipCategory extends ProductCategory {
    name = "Chips"
    getImageUrl() {
        return this.imgPath + "chips.jpeg";
    }
}
class ChocCategory extends ProductCategory {
    name = "Chocolate"
    getImageUrl() {
        return this.imgPath + "chocbar.png";
    }
}
class GumCategory extends ProductCategory {
    name = "Chewing Gum"
    getImageUrl() {
        return this.imgPath + "gum.png";
    }
}