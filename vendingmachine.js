let again;

    console.log("1. Juice - Rs.20");
    console.log("2. Chips - Rs.15");
    console.log("3. Chocolate - Rs.30");
    console.log("4. Biscuit - Rs.10");
    console.log("5. Water - Rs.10");

    let choice = Number(prompt("Enter item number (1-5):"));
    

    let item;
    let price;

    if (choice === 1) {
        item = "Juice";
        price = 20;
    } else if (choice === 2) {
        item = "Chips";
        price = 15;
    } else if (choice === 3) {
        item = "Chocolate";
        price = 30;
    } else if (choice === 4) {
        item = "Biscuit";
        price = 10;
    } else if (choice === 5) {
        item = "Water";
        price = 10;
    } else {
        alert("Invalid item number!");
    }
    alert(item)

    let money = Number(prompt("Enter your money:"));

    function change() {
        return money - price;
    }
    alert("your change is"+change())
if (choice >= 1 && choice <= 5) {
if (money < 0 || isNaN(money)) {
alert("Invalid amount!");}}
if (money < price) {
alert("Insufficient balance!");}
for (let i = 3; i >= 1; i--) {
alert(i);}
alert("Your item is ready!");

