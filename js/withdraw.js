document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 4: getting withdraw area amount and updating
    //alt+shift+f to rearrange the codes

    const withdrawField = document.getElementById('withdraw');
    const withdrawString = withdrawField.value;
    const withdrawInFloat = parseFloat(withdrawString);


    const withdrawElement = document.getElementById('withdraw-screen');
    const previousWithdrawScreenTextinString = withdrawElement.innerText;
    const previousWithdrawScreenTextinFloat = parseFloat(previousWithdrawScreenTextinString);
    withdrawElement.innerText = previousWithdrawScreenTextinFloat + withdrawInFloat;

    //step 5: updating new balance total after withdrawal

    const getBalanceAreaTotal = document.getElementById('balance-screen');
    const balanceAreaTotalInString = getBalanceAreaTotal.innerText;
    const balanceAreaTotalInFloat = parseFloat(balanceAreaTotalInString);

    if (withdrawInFloat > balanceAreaTotalInFloat) {
        alert('Baaper Bank e eto dollar nai.... :(');
        return;
    }
    else {

        const newTotalBalance = balanceAreaTotalInFloat - withdrawInFloat;
        getBalanceAreaTotal.innerText = newTotalBalance;
    }


    withdrawField.value = '';

})

