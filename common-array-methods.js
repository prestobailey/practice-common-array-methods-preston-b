// Task 1: Matrix
let itemOrders = [
    ["Coffee", "Mocha", "Americano"],  
    ["Bagel", "Sandwhich", "Oatmeal"] // Pastries
];

// Task 2: Number Log of Orders
console.log("Number of drinks:", itemOrders[0].length);
console.log("Number of pastries:", itemOrders[1].length);

// Task 3: Bracket Notation
console.log("First drink:", itemOrders[0][0]);  
console.log("Last pastry:", itemOrders[1][2]);  
console.log("Second drink:", itemOrders[0][1]); 

// Task 4: Access Orders Dynamically with Variables
let drinkIndex = 2;
let pastryIndex = 0;
console.log("Selected drink:", itemOrders[0][drinkIndex]);  
console.log("Selected pastry:", itemOrders[1][pastryIndex]); 

// Task 5: Loop 
console.log("All drinks:");
for (let i = 0; i < itemOrders[0].length; i++) {
    console.log(itemOrders[0][i]);
}

// Task 6: Add a New Order
itemOrders[0].push("Flat White"); 
console.log("Updated number of drinks:", itemOrders[0].length);

// Using variables to log 
let categoryIndex = 0; 
let itemIndex = 3; 
console.log("Your Cart:", itemOrders[categoryIndex][itemIndex]); 