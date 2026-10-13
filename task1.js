let studentname= prompt("Enter your name")
let a= Number(prompt("Enter your Maths marks"))
let b=Number(prompt("Enter your English marks"))
let c=Number(prompt("Enter your Sci marks"))
let total= a+b+c
let average= (a+b+c)/3
alert("students name:"+ studentname)
alert("your total is " + total)
alert("your avg is "+ average)

if (average>=90){
    alert("Grade A")
}
elseif(average>=75) 
{
    alert("Grade B")
}
elseif(average >=50)
{
    alert("Grade C")
}
elseif(average<50)
{

alert("Grade F")
}
elseif(0>average<100)
{
    alert("Invalid input")
}

let msg=confirm("Should another profile be created?")