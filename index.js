console.log('connect');

function getValueById(ValueId){
    let getValue = document.getElementById(ValueId);
    let value = parseFloat(getValue.value);
    getValue.value = '';
    return value;
}

function getElementValueById(elementValueId){
    let getValue = document.getElementById(elementValueId);
    let value = parseFloat(getValue.innerText);
    return value;
}

function setAllValue (elementId, value){
    let getAllValue = document.getElementById(elementId);
    getAllValue.innerText = value;
}

// deposit
document.getElementById('btn-deposit').addEventListener('click', () =>{
    let depositInputValue = getValueById('deposit-value');
    let depositElementValue = getElementValueById('depositGivenValue')
    let depositTotalValue = depositInputValue + depositElementValue;
    setAllValue('depositGivenValue', depositTotalValue);

    let balance = getElementValueById('balanceGivenValue');
    let totalBalance = balance + depositInputValue;
    setAllValue('balanceGivenValue', totalBalance)

})

// withdraw
document.getElementById('btn-withdraw').addEventListener('click', () =>{
    let withdrawInputValue = getValueById('withdraw-value');
    let withdrawElementValue = getElementValueById('WithdrawGivenValue');
    let totalWithdrawValue = withdrawInputValue + withdrawElementValue;
    setAllValue('WithdrawGivenValue', totalWithdrawValue);

    let balance = getElementValueById('balanceGivenValue');
    let totalBalance = balance - withdrawInputValue;
    setAllValue('balanceGivenValue', totalBalance);
})