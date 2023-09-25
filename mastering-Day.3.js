var x = 4;
if(x % 2 == 0){
    console.log("Even");
}else {
    console.log("Odd");
}

var x =13;
if(x % 2 ==0){
    console.log("Even");

}else {
    console.log("Odd");
}

var x= 10;
if(x % 5 ==0){
     console.log("Even");
}else{
     console.log("Odd")
}
var y = 50;
if (y % 5 == 0){
    console.log("Even")
}else {
    console.log("Odd")
}
var y = 4;
if (y % 2 ==0){
   console.log("Even")
}else {
   console.log("Odd")
}
var x ="0";
var y ="3-3";
var z ="0";
if (x===y){
   console.log("first condition")
}
else if(x===z){
   console.log("second condition")
}
else if (y===z){
   console.log("third condition")
}
else{
   console.log("Gameover")
}
var rajeeb = 35;
var sadik = "35-2";
var shameer ="33";
var ajmal = 50;
if (rajeeb===ajmal){
    console.log("The best perfomer")
}else if (sadik===shameer){
    console.log("All Rounder")
}else if(shameer===ajmal){
    console.log("The winner")
}else {
    console.log("Game over")
}
var a ="10";
var b =20;
var c ="10";
if (a===b){
    console.log("The winner")
}else if(b===c){
    consoe.log("The best perfomer")
}else if(a===c){
    console.log("We are the real champion")
}
var a ="10";
var b =20;
var c ="10";
if (a===b){
   console.log("The winner")
}else if(b===c){
   console.log("The best performer")
}else if (a===c){
   console.log("The real champion")
}

var category ="women";
switch (category){
    case "men" :
        console.log("Go to heaven")
        break;
        case "women" :
            console.log("Go to world")
            break;
            case "Kids" :
                console.log("Go to school")
                break;
                default: 
                console.log("Game over")
           
}
 
var toys = ["ball", "car", "doll", "train", "puzzle"];
console.log("Playing with toys using a for loop");
for(var i=0; i<toys.length; i++){
   console.log("Playing with toys", toys[i]);
}
console.log("Play time over");

var batch =["rajeeb","rahul m","rahul b","mani","abinu","manu","sharan","vishnu","sanjith","dharshan"];
console.log("st joseph students name using a for loop");
for(var i=0; i<batch.length;i++){
    console.log(" st joseph students", batch[i]);
}

console.log("the best memories");
var alphabet =["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"H" ,"J" ];
console.log("english alphabet using a for loop ");
for(var i=0; i<alphabet.length; i++){
    console.log("english alphabet", alphabet[i]);
}
console.log("its tome over now")

var batteryLevel = 5;
console.log("playing with remote control toy");
while(batteryLevel > 0){
    console.log("playing with car toy");
    batteryLevel--;
}
console.log("The toy car battery is empty")

var batch = ["guvi" ,"thiru","b52we tamil"];
console.log(batch);

batch[3]= " zen";
console.log(batch);

batch.push("class");
console.log(batch);

batch.unshift("task");
console.log(batch);

batch.pop();
console.log(batch);

batch.shift();
console.log(batch);

