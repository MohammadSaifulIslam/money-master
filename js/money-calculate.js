function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
function getInnerTextById(elementId){
    const textElement = document.getElementById(elementId).innerText;
    const elementInnerText = parseFloat(textElement);
    return elementInnerText;
}

document.getElementById('calculate').addEventListener('click', function (){
    const incomeField = document.getElementById('income');
   const income =  getInputValueById('income');
   const food = getInputValueById('food');
   const rent = getInputValueById('rent');
   const clothes = getInputValueById('clothes');
   const others = getInputValueById('others');
    if(income < 0 || food < 0 || rent < 0 || clothes < 00 || others <0){
        alert('Please enter a positive amount')
        return;
    }
   else if(isNaN(income)){
        alert('Please enter a valid income amount');
        incomeField.value = '';
        return;
   }
   else if(isNaN(food)){
        alert('Are you an Alien??? If not, please enter your food cost.')
        return;
   }
   else if(isNaN(rent)){
        alert('Tumi ki gastoly thako? If not, Please enter your rent cost.')
        return;
   }
   else if(isNaN(clothes)){
        alert('Tomar lojja-shorom thaka uchit,Please enter your clothes cost ')
        return;
   }
   else if(isNaN(others)){
        alert('If your others cost is zero,You would be a richman very soon. So to pass this input, enter "0" ')
        return;
   }
   const previousExpenses = document.getElementById('total-expenses');
   const totalExpensive = food + rent + clothes + others;
   if(totalExpensive > income){
    alert('Your expenses is bigger than your income. So, cut your coat according to your cloth.');
    return;
   }
   previousExpenses.innerText = totalExpensive;

    // balance
   const balanceElement = document.getElementById('balance');
   const balance = income - totalExpensive;
   balanceElement.innerText = balance;
});
document.getElementById('saving-btn').addEventListener('click', function(){
    // saving
    const income =  getInputValueById('income');
    const totalExpenses = getInnerTextById('total-expenses');
    const restBalance = income - totalExpenses;
    const savingPercentElement = document.getElementById('saving-input')
    const savingPercent = getInputValueById('saving-input');
    const savingAmount = (income * savingPercent) / 100;
    console.log(restBalance , savingAmount)
    const savingElement = document.getElementById('saving-element');
   
    if(isNaN(income)){
        alert('Please enter a valid income amount');
        incomeField.value = '';
        return;
   }
    else if(isNaN(savingPercent)){
        alert('Please enter a valid saving persentage');
        return;
    }
    else if(savingPercent < 0 || income < 0){
        alert('Please enter a positive number');
        return;
    }
    else if(savingAmount > restBalance ){
        alert("You can't saving more than your balance")
        savingPercentElement.value = '';
        return;
    }
    ;
    savingElement.innerText = savingAmount;

    // remaining balance
    const remainingBalanceElement = document.getElementById('remaining-balance');
    const remainingBalance = income - (savingAmount + totalExpenses);
    remainingBalanceElement.innerText = remainingBalance;
})