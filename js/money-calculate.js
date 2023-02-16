function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

document.getElementById('calculate').addEventListener('click', function(){
   const income =  getInputValueById('income');
   const food = getInputValueById('food');
   const rent = getInputValueById('rent');
   const clothes = getInputValueById('clothes');
   const others = getInputValueById('others');
   const previousExpenses = document.getElementById('total-expenses');
   const totalExpensive = food + rent + clothes + others;
   previousExpenses.innerText = totalExpensive;

    // balance
   const balanceElement = document.getElementById('balance');
   const balance = income - totalExpensive;
   balanceElement.innerText = balance;
});
document.getElementById('saving-btn').addEventListener('click', function(){
    const income =  getInputValueById('income');
    const savingPercent = getInputValueById('saving-input');
    const savingAmount = (income * savingPercent) / 100;
    const savingElement = document.getElementById('saving-element');
    savingElement.innerText = savingAmount;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    const expensesElementString = document.getElementById('total-expenses').innerText;
    const totalExpenses = parseFloat(expensesElementString);
    const remainingBalance = income - (savingAmount + totalExpenses);
    console.log(income ,savingAmount , totalExpenses);
    remainingBalanceElement.innerText = remainingBalance;
})