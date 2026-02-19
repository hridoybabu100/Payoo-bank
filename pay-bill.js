//Pay-Bill
document.getElementById('pay-bill-btn').addEventListener('click', function(){
    // console.log('Pay-Bill clicked'); 
    //pay-bill-bank
    const payBillBank = getValueInput('pay-bill-bank');
    console.log(payBillBank);
    if ( payBillBank ==='Select A Bank' ){
        alert('Please Seclect Your Pay Bill Bank')
        return
    }
    //pay-bill-number
    const payNumber = getValueInput('pay-bill-number');
    console.log(payNumber);
    
    if ( payNumber.length != 11 ){
        alert('Please Correct Number');
        return
    }
    //pay-bill-amount
    const payAmount = getValueInput('pay-bill-amount');

    const newAmount = getBalance() + Number(payAmount);
    console.log(newAmount);
    if ( newAmount < 0  ){
        alert('Your Balance Low');
        return
    }
    //add-money-pin
    const pin = getValueInput('pay-bill-pin');
    // console.log(pin);
    

    if( pin === '1234' ){
        alert(`Pay Bill Successfull from ${payBillBank} at ${payNumber} for the ${ new Date}`)
        setBalance(newAmount);
        const history = document.getElementById('history');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="history-box p-8 bg-slate-200 ">
        Pay Bill Successfull From ${payBillBank} at ${payNumber} to the ${ new Date}
        </div>
        `
        history.appendChild(newHistory);
    }
    else{
        alert('Invalid Pin')
    }
    
    

    
})