"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coin = /** @class */ (function () {
    function Coin(value) {
        this.value = value;
        this.value = value;
    }
    return Coin;
}());
var Dollar = /** @class */ (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        return _super.call(this, 1.00) || this;
    }
    Dollar.prototype.getImageUrl = function () {
        return "img/dollar.jpg";
    };
    ;
    return Dollar;
}(Coin));
var tenp = /** @class */ (function (_super) {
    __extends(tenp, _super);
    function tenp() {
        return _super.call(this, 0.10) || this;
    }
    tenp.prototype.getImageUrl = function () {
        return "img/10p.jpg";
    };
    ;
    return tenp;
}(Coin));
var fiftyp = /** @class */ (function (_super) {
    __extends(fiftyp, _super);
    function fiftyp() {
        return _super.call(this, 0.50) || this;
    }
    fiftyp.prototype.getImageUrl = function () {
        return "img/50p.jpeg";
    };
    ;
    return fiftyp;
}(Coin));
var twentyp = /** @class */ (function (_super) {
    __extends(twentyp, _super);
    function twentyp() {
        return _super.call(this, 0.20) || this;
    }
    twentyp.prototype.getImageUrl = function () {
        return "img/20p.jpeg";
    };
    ;
    return twentyp;
}(Coin));
var ProductCategory = /** @class */ (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
var SodaCategory = /** @class */ (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Soda";
        return _this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var LollyCategory = /** @class */ (function (_super) {
    __extends(LollyCategory, _super);
    function LollyCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Lolly";
        return _this;
    }
    LollyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "lolly.png";
    };
    return LollyCategory;
}(ProductCategory));
var ChipCategory = /** @class */ (function (_super) {
    __extends(ChipCategory, _super);
    function ChipCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Chips";
        return _this;
    }
    ChipCategory.prototype.getImageUrl = function () {
        return this.imgPath + "chips.jpeg";
    };
    return ChipCategory;
}(ProductCategory));
var ChocCategory = /** @class */ (function (_super) {
    __extends(ChocCategory, _super);
    function ChocCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Chocolate";
        return _this;
    }
    ChocCategory.prototype.getImageUrl = function () {
        return this.imgPath + "chocbar.png";
    };
    return ChocCategory;
}(ProductCategory));
var GumCategory = /** @class */ (function (_super) {
    __extends(GumCategory, _super);
    function GumCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Chewing Gum";
        return _this;
    }
    GumCategory.prototype.getImageUrl = function () {
        return this.imgPath + "gum.png";
    };
    return GumCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/// <reference path="product.ts" />
var productFactory = /** @class */ (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new CocaCola();
    };
    return productFactory;
}());
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />
/// <reference path="../node_modules/@types/knockout/index.d.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = /** @class */ (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        //private _size: VendingMachineSize
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new tenp(), new Dollar(), new fiftyp(), new twentyp()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("I'm sorry, we're out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid -
                _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
        /** "this" refers to the class, because this is an arrow function.
         * when a coin is accepted, the value of the coin is added to the "paid" count
         */
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map