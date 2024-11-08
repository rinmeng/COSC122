const cost = Number(prompt('Enter the cost of food on your bill: '));
const tip = Number(prompt('Enter the tip percentage you would like to give: '));
const numberOfPeople = Number(prompt('Enter the number of people: '));

const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calculatedTip = document.getElementById('calculated-tip');
const totalBill = document.getElementById('total-bill');
const personOwes = document.getElementById('person-owes');

const tipValue = (cost * tip) / 100;
const totalBillValue = Number(cost) + tipValue;
const billPerPerson = totalBillValue / numberOfPeople;

billAmount.textContent = ` $${cost.toFixed(2)}`;
tipPercentage.textContent = `${tip}%`;
calculatedTip.textContent = `$${tipValue.toFixed(2)}`;
totalBill.textContent = `$${totalBillValue.toFixed(2)}`;
personOwes.textContent = `$${billPerPerson.toFixed(2)}`;