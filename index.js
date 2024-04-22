import inquirer from "inquirer";
import chalk from "chalk";
// define the list of currencies and their exchangr rates 
let exchangeRate = {
    "USD": 1, //Base currency
    "AUD": 1.56, //Australian Dollar
    "AED": 3.67, //Dirham
    "CAD": 1.37, //Canadian Dollar
    "CNY": 7.24, //chinese yuan
    "CHF": 0.91, //Swiss Franc
    "EUR": 0.93, //Euro
    "GBP": 0.82, //British pound
    "IDR": 16218, //Indonesian rupiyah
    "INR": 83.37, //Indian rupee
    "JYP": 154.62, //Japenese yuan
    "KWD": 0.31, //kuwaiti Dinar
    "OMR": 0.38, // Omani Rial
    "PKR": 277.69, // pakistani rupee
    "TRY": 32.49, //Turkish Lira
};
// prompt the user to select currencies to convert from and to
let userAns = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: [, "USD", "AED", "AUD", "CAD", "CNY", "CHF", "EUR", "GBP", "IDR", "INR", "JYP", "KWD", "OMR", "PKR", "TRY",]
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "AED", "AUD", "CAD", "CNY", "CHF", "EUR", "GBP", "IDR", "IDN", "JYP", "KWD", "OMR", "PKR", "TRY"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// perform currency conversion by using formula 
let fromAmount = exchangeRate[userAns.fromCurrency];
let toAmount = exchangeRate[userAns.toCurrency];
let amount = userAns.amount;
// formula of conversion 
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// Display the converted amount 
console.log(`converted Amount = ${chalk.yellow(convertedAmount.toFixed(2))}`);
