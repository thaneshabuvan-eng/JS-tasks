let num= Number(prompt("Enter your number="))

if(num%2==0){
    alert("even")
}
else{
    alert("odd")
}

function table() {
    for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
    }
}
table();
let sum = 0;

for (let i = 1; i <= num; i++) {
    sum = sum + i;
}
alert("Sum = " + sum);
let star;
for (let i = 1; i <= num; i++) {
for (let j = 1; j <= i; j++) {
 star = star + "* ";}
console.log(star);
}
let again;

do {
   
alert("You entered " + num);
again = confirm("Do you want to run the program again?");

} while (again);

