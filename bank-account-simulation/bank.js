
// Create 4 accounts as objects.
// Each should have: name, balance, currency, and type (e.g., "Savings", "Checking").

// Account1

let account1 = {
name: "Sherifat",
bal: 800,
currency: "USD",
type: "Savings"
};


// Account2

let account2 = {
name: "Amaka",
bal: 600,
currency: "USD",
type: "Checkings"
};


// Account3

let account3 = {
name: "Josephine",
bal: 400,
currency: "USD",
type: "Savings"
};


// Account4

let account4 = {name: "Jola",
bal: 200,
currency: "EUR",
type: "Checkings"
};


// Simulate deposits:
// Add different deposit amounts to two accounts.
// Show the new balances.


// Sherifat's account Deposit

let Sherifatdeposit = 200;
account1.bal = account1.bal + Sherifatdeposit,
console.log(account1.name + " new bal is: " + account1.bal + " " + account1.currency);

// Amaka's account Deposit

let Amakadeposit = 400;
account2.bal = account2.bal + Amakadeposit,
console.log(account2.name + " new bal is: " + account2.bal + " " + account2.currency);


// Simulate withdrawals:
// Attempt withdrawals from two accounts.
// If the balance is insufficient, print:
// "Withdrawal denied for <name>: insufficient funds"


// Josephine's withdrawal

let withdrawal3 = 150;
if (account3.bal >= withdrawal3) {
account3.bal -= withdrawal3,
console.log(account3.name + " new bal: " + account3.bal);
} else {
console.log("Withdrawal denied for " + account3.name + ": insufficient funds");
}

// Jola's withdrawal

let withdrawal4 = 300;
if (account4.bal >= withdrawal4) {
account4.bal -= withdrawal4,
console.log(account4.name + " new bal: " + account4.bal);
} else {
console.log("Withdrawal denied for " + account4.name + ": insufficient funds");
}


// Monthly maintenance:
// If account type is "Savings", add interest (e.g., 2% of balance).
// If account type is "Checking", deduct fees (e.g., 50 units).
// Try transfer from Sherifat (USD) to Amaka (USD)


let transferAmount = 100;
if (account1.currency === account2.currency) {
if (account1.bal >= transferAmount) {
account1.bal -= transferAmount;
account2.bal += transferAmount;
console.log("Transfer successful: " + transferAmount + " " + account1.currency + " from " + account1.name + " to " + account2.name);
} else {
console.log("Transfer denied for " + account1.name + ": insufficient funds");
}
} else {
console.log("Transfer failed: currency mismatch");
}

// Try transfer from Jola (EUR) to Sherifat (USD)

let transferAmount2 = 50;
if (account4.currency === account1.currency) {
account4.bal -= transferAmount2;
account1.bal += transferAmount2;
console.log("Transfer successful: " + transferAmount2 + " " + account4.currency + " from " + account4.name + " to " + account1.name);
} else {
console.log("Transfer failed: currency mismatch");
}


// Bonus: handle currency conversion (1 EUR = 1.1 USD)

let exchangeRate = 1.1;
if (account4.currency !== account1.currency) {
let converted = transferAmount2 * exchangeRate;
if (account4.bal >= transferAmount2) {
account4.bal -= transferAmount2;
account1.bal += converted;
console.log("Transfer successful with conversion: " + transferAmount2 + " EUR (" + converted + " USD) from " + account4.name + " to " + account1.name);
} else {
console.log("Transfer denied for " + account4.name + ": insufficient funds");
}
}


// Monthly maintenance:
// If account type is "Savings", add interest (2% of balance).
// If account type is "Checking", deduct fees (50 units).


let accounts = [account1, account2, account3, account4];

for (let acc of accounts) {
if (acc.type === "Savings") {
let interest = acc.bal * 0.02;
acc.bal += interest;
console.log(acc.name + " received interest. New bal: " + acc.bal);
} else if (acc.type === "Checkings") {
acc.bal -= 50;
console.log(acc.name + " charged fee. New bal: " + acc.bal);
}
}


// Comparisons: highest and lowest balance

let highest = accounts[0];
let lowest = accounts[0];

for (let acc of accounts) {
if (acc.bal > highest.bal) {
highest = acc;
}
if (acc.bal < lowest.bal) {
lowest = acc;
}
}
console.log("Highest bal: " + highest.name + " with " + highest.bal + " " + highest.currency);
console.log("Lowest bal: " + lowest.name + " with " + lowest.bal + " " + lowest.currency);


// Account status check:
// If balance > 0 → "Active"
// If balance === 0 → "Empty"
// If balance < 0 → "Overdrawn"

for (let acc of accounts) {
let status;
if (acc.bal > 0) {
status = "Active";
} else if (acc.bal === 0) {
status = "Empty";
} else {
status = "Overdrawn";
}
console.log(acc.name + " status: " + status);
}


// Transaction summary: final balances and statuses

console.log("Transaction Summary");
for (let acc of accounts) {
let status;
if (acc.bal > 0) {
status = "Active";
} else if (acc.bal === 0) {
status = "Empty";
} else {
status = "Overdrawn";
}
console.log(acc.name + " Bal: " + acc.bal + " " + acc.currency + " Type: " + acc.type + " Status: " + status);
}