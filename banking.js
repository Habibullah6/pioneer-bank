document.getElementById('deposit-button').addEventListener('click', function(){
    changeBalance('deposit')

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    changeBalance('withdraw')
})


function changeBalance(type) {
    // get deposit total
    const total = document.getElementById(`${type}-total`);
    const totalText = total.innerText;
    const totalTextNumber = parseFloat(totalText)
    
    // get input field
    const input = document.getElementById(`${type}-input`);
    const inputAmount = input.value;
    if(inputAmount.length != 0 && inputAmount>0){
    const inputAmountNumber = parseFloat(inputAmount);
    total.innerText = parseFloat(totalTextNumber + inputAmountNumber);
    
    // add balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalTextNumber = parseFloat(balanceTotalText);
    if(type == 'deposit' ){
    balanceTotal.innerText = inputAmountNumber + balanceTotalTextNumber;
    }
    else{
    balanceTotal.innerText =  balanceTotalTextNumber - inputAmountNumber;
    }
    // clear input field
    input.value = '';
    }
    else{
    alert('enter a correct amount')
    }
}