function Phone(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
}

Phone.prototype.printInfo = function() {
    console.log('Phone brand: ' + this.brand + ', color: ' + this.color + ', price: ' + this.price);
};

Phone.prototype.getPrice = function() {
    return this.price;
};

Phone.prototype.getColor = function() {
    return this.color;
};

Phone.prototype.getBrand = function() {
    return this.brand;
};

var samsung = new Phone('Samsung', 'blue', 2400);
var apple = new Phone('Apple', 'white', 3400);
var applePrice = apple.getPrice();

samsung.printInfo();
