class Car{
    private name;
    private year;
    constructor(name:string,year:number){
        this.name=name;
        this.year=year;
    }
    public displayCarModel():string{
            
            return "` Car name => "+this.name+" and Car Model Year => "+this.year+" `"; 
    }
}

var obj :Car;
obj  = new Car("Hyundai i10",2014);
var carName =obj.displayCarModel();