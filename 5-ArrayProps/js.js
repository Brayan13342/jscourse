var arr = ["Brayan", "Ana", "Esteban", "Yeny", "Yessi"];
var lenght = arr.length;
//document.write(lenght);

//Add a new value
arr[arr.length] = "Prisma";

//Add some values
arr.push("Prisma", "Yura");

//Delete last value
arr.pop();

//Concat 2 arrays

var arr2 = ["Prisma", "Yura", "Zora"];
var arr3 = arr.concat(arr2);
//document.write(arr3)

//Join

//document.write(arr.join(" : "));

//Sort
var sorted = arr.sort();
//document.write(sorted);

//Soreted in reverse
var reversed = arr.reverse();
//document.write(reversed);