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
