// CashOut Button Clicked
const CashOutButton = document.getElementById("Cashout-btn").addEventListener('click', function(){
    //CasOut Number varified
    const cashOutNumber = getValueInput("cashout-number");
    if (cashOutNumber.length != 11 ){
        alert('Your Agent Number invalid');
        return ;
    }
    //CashOut Amount
    const cashOutAmount = getValueInput("cashout-amount");
    
    //Main Balance
    const mainBalance = document.getElementById("balance");
    const balance = mainBalance.innerText;
    console.log('Balance', balance);

    //Balance Calculate
    const newBalance = Number(balance) - Number(cashOutAmount);
    console.log('New Balance', newBalance);

    //Balance Less Than 0 tk
    if ( newBalance < 0 ){
        alert('Your Balance Empty')
        return
    }
    //Pin Verified
    const cashOutPin = getValueInput("cashout-pin");
    if ( cashOutPin === '1234' ){
        alert('CashOut Successfull');
        mainBalance.innerText = newBalance ;
        window.location('/home.html')
    }else{
        alert('Invalid Pin')
        return ;
    }  
})

// // Button Clicked
//  const cashOutButton = document.getElementById("Cashout-btn").addEventListener('click', function(){
//     // console.log('Button Clicked', cashOutButton);
    
//     //cashout-input-text
//     const cashOutInputText = document.getElementById("cashout-input-text");
//     const cashOutText = cashOutInputText.value ;
//     console.log(cashOutText); 
//     if( cashOutText != '01601015045'){
//         alert('Invalid Your Agent Number');
//         return;
//     } 

//     //"cashout-input-amount"
//     const cashOutInputAmount = document.getElementById("cashout-input-amount");
//     const cashOutAmount = cashOutInputAmount.value ;
//     console.log(cashOutAmount);

//     //"balance"
//     const mianBalance = document.getElementById("balance");
//     const newBalance = mianBalance.innerText ;
//     // console.log('Balance', newBalance); 

//     //Total New balance
//     const totalNewBalance = Number(newBalance) - Number(cashOutAmount)
//     console.log('Balance', totalNewBalance);

//     if( totalNewBalance < 0 ){
//         alert('Balace empty')
//         return
//     }
//     //Pin Varified
//     const pinInput = document.getElementById("cashout-input-pin");
//     const pin = pinInput.value;

//     if ( pin === '1234'){
//         alert('Cashout Successfull')
//         mianBalance.innerText = totalNewBalance ;
//         window.location('/home.html')
//     }
//     else{
//         alert('Invalid Pin')
//         return
//     }
    
    
    
    
// })