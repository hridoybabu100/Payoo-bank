//transfer-btn
document.getElementById('transfer-btn').addEventListener('click', function(){
    // console.log('Transfer Button Clicked Now');
    //transfer-number
    const transferNumber = getValueInput('transfer-number');
    // console.log(transferNumber); 
    if ( transferNumber.length != 11 ){
        alert('Write Your Correct Number');
        return;
    }
    // transer-amount 
    const transferMoney = getValueInput('transer-amount');
    
    //New balance
    const newBalance = getBalance() + Number(transferMoney); 
    console.log('Current Balance', newBalance);
    

    if( newBalance < 0 ){
        alert('Your Balnace Empty')
        return
    }
    //transfer-pin
    const pin = getValueInput('transfer-pin');
    if ( pin === '1234' ){
        alert('transfer-money successfull');
        setBalance(newBalance)
           const history = document.getElementById('history');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="history-box p-8 bg-slate-200 ">
            Transfer Money Successfull From ${transferNumber} at ${transferMoney} to the ${ new Date}
        </div>
        `
        history.appendChild(newHistory);
    }
    else{
        alert('Invalid Pin');
        return
    }
    
    
})