// step 1: button add listener

document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get deposit area amount and updating
    const depositfield = document.getElementById('deposit');
    const depositString = depositfield.value;
    const depositInFloat  = parseFloat(depositString);
    //console.log(depositInNumber);
    //console.log(typeof depositInNumber); 
    //console.log(deposit);

    const depositElement = document.getElementById('deposit-screen');
    const previousDepositScreenTextinString = depositElement.innerText;
    const previousDepositScreenTextinFloat = parseFloat(previousDepositScreenTextinString);
    depositElement.innerText = depositInFloat + previousDepositScreenTextinFloat; 

    //step 3: getting balance area ammount and updating

    const balanceElement = document.getElementById('balance-screen');
    const previousBalanceScreenText = balanceElement.innerText;
    const previousBalanceScreenTextInFloat = parseFloat(previousBalanceScreenText);
    balanceElement.innerText = previousBalanceScreenTextInFloat + depositInFloat;
    
    
    depositfield.value = ''; //clearing the input field after taking input
})
