var Car = (function () {
    function Car(name, year) {
        this.name = name;
        this.year = year;
    }
    Car.prototype.displayCarModel = function () {
        return "` Car name => " + this.name + " and Car Model Year => " + this.year + " `";
    };
    return Car;
}());
var obj;
obj = new Car("Hyundai i10", 2014);
var carName = obj.displayCarModel();
