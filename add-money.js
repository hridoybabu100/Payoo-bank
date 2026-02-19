//Add Money Button
document.getElementById("add-money-btn").addEventListener('click', function(){
    //seclect A bank
    const bankAcc = getValueInput("add-money-bank")
    console.log(bankAcc);
    if (bankAcc === 'Select A Bank' ) {
        alert('Please seclect a Bank')
    }
    //"add-money-number"
    const addMoneyNumber = getValueInput("add-money-number");
    if ( addMoneyNumber.length != 11 ){
        alert('Please Correct Your Number')
    }
    //"add-money-amount"
    const addAmount = getValueInput("add-money-amount")

    //New balance 
    const newBalance = getBalance() + Number(addAmount);
    console.log('Add money', newBalance);

    //Pin Setup
    const pin = getValueInput("add-money-pin")
    if ( pin === '1234' ){
        alert(`Add Money Successfull From ${bankAcc} at ${addMoneyNumber} to the ${ new Date}`);
        setBalance(newBalance)

        const history = document.getElementById('history');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="history-box p-8 bg-slate-200 ">
            Add Money Successfull From ${bankAcc} at ${addMoneyNumber} to the ${ new Date}
        </div>
        `
        history.appendChild(newHistory);
    }else{
        alert('Invalid Pin')
        return ;
    } 
})
