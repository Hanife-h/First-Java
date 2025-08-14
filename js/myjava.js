// Authentication System
const Login = () => {
   const username = prompt("please enter your username(admin or user):")
   const password = prompt("please enter your password:")

  const validCredentials = (username === "admin" || username === "user") && password === "1234";
  if (validCredentials) {
    return true
  }else{
    alert("username or password is invalid.")
    return false
  }
}

// Coffee Order System
const takeOrder = () => {
    const name = prompt("Enter your name:")
    const age = Number(prompt("Enter your age:"));
    const coffeeType = prompt("Enter coffee type (espresso, latte, cappuccino):").toLowerCase();
    const quantity = Number(prompt("Enter quantity:"));

    const validCoffees = ["espresso", "latte", "cappuccino"];
if (!validCoffees.includes(coffeeType)) {
    alert("Invalid coffee type! Please refresh and try again.");
    return null
}

   const prices = {
    espresso: 2.5,
    latte: 3.5,
    cappuccino: 4.0
};

  const pricePerCup = prices[coffeeType];
  const originalTotal = pricePerCup * quantity;
  const discount = 0;
  if (age < 18 || age > 60) {
    discount = originalTotal * 0.1;
  }
  const finalTotal = originalTotal - discount;
  return{
    name,
    coffeeType,
    quantity,
    originalTotal,
    discount,
    finalTotal
  }
}

// Bill Splitting System
const splitBill = (finalTotal) => {
  const splitCount = Number(prompt("How many people are splitting the bill? (1, 2, or 3)"));
  const tipPercentage = Number(prompt("Enter tip percentage (0, 5, 10, or 15):"));

if (![1, 2, 3].includes(splitCount) || ![0, 5, 10, 15].includes(tipPercentage)) {
    alert("Invalid bill splitting or tip selection! Please refresh and try again.");
    return null
}

  const tipAmount = finalTotal * (tipPercentage / 100);
  const totalWithTip = finalTotal + tipAmount;
  const perPerson = totalWithTip / splitCount;

  return{
    tipAmount,
    totalWithTip,
    perPerson,
    splitCount,
    tipPercentage
  }
}

const start = () => {
    const isLoggedIn = Login();
    if (!isLoggedIn) return
    const order = takeOrder();
    if (!order) return
    const bill = splitBill(order.finalTotal);
    if (!bill) return
    alert(`
        Hello ${order.name}
        You ordered ${order.quantity} ${order.coffeeType}
        Original total $ : ${order.originalTotal.toFixed(2)}
        Discount $ : ${bill.discount}
        TipAmount (" ${bill.tipPercentage}"%) : $ ${bill.tipAmount.toFixed(2)}
        Total with tip : $ "${bill.totalWithTip.toFixed(2)}"

        Each person pays ("${bill.splitCount}" People) :
         $ ${bill.perPerson.toFixed(2)}`
        );
}
start()

        
  
