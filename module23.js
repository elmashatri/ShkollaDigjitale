function showMessage (){
    alert("This message is inside a function")
}
showMessage();

function sum(x,y){
    return x+y;
}
document.write(sum(20,5));

//var arrowfunction = () => alert("Hello World!");
//arrowfunction();

var arrowfunction = name => alert('Hello ${name}');
arrowfunction("Elma Shatri");

function Firstname(){
    var localVar = "Elma Shatri";
    alert(localVar);
}
Firstname();

function seconds(minutes){
    return minutes*60;
}
seconds();
document.write(seconds(60));
var car = {
    name:"BMW", 
    color:"blue", 
    year:2020, 
    kilometers:0,
    startEngine: function(){
        alert("Vroooom!");
    },
    get getKilometers(){
        return this.kilometers;
    },
    set setKilometers(km){
        this.kilometers=km;
    }
};
console.log(car.getKilometers);
car.setKilometers=100;
console.log(car.getKilometers);
document.write(car.name+"<br>"+car.color+"<br>"+car.year+"<br>"+car.kilometers);
alert((car['color']));
car.startEngine();

var computer = new Object();
computer.name="Lenovo";
computer.CPU="Intel core i7";
coumputer.RAM="32GB";
computer.GPU="GeForce GT730 2GB Dual DP HP";
computer.type=function(){
    return this.name+","+this.CPU+","+this.RAM+","+this.GPU;
}
delete computer.GPU;
document.write("<br>"+computer.type());

function Computer(name, CPU, RAM,GPU){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
    this.GPU=GPU;
}
var computer1 = new Computer ("Mackbook PRO","M1 Chip", "8GB","5600M GPU");
var computer2 = new Computer ("HP","Intel i3 Core", "4GB","Integrated");
console.log("Computer 1:"+computer1);
console.log("Computer 2:"+computer2);
document.write("<br>Computer 1:"+computer1.name+","+computer1.CPU+","+computer1.RAM+","+computer1.GPU);
document.write("<br>Computer 2:"+computer2.name+","+computer2.CPU+","+computer2.RAM+","+computer2.GPU)
