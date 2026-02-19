// console.log('Machine Connected');


//Get Input Machine Conneted
function getValueInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value ;
    
}

//Get Balance 
function getBalance (){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log('Current Balance', Number(balance));
    return Number(balance)
    
}

//Set Balance 
function setBalance (value){
   const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value
}

//Machine id > hide all . Show all

function showOnly (id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const history = document.getElementById('history');
    const transfer = document.getElementById('transfer-money');
    const pay = document.getElementById("pay-bill");
    // console.log(` add money ${addMoney}, cashOut ${cashOut}`);

    // Sobaike hide korer dew
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    history.classList.add('hidden');
    transfer.classList.add('hidden');
    pay.classList.add("hidden");

    //Id ala gulake show koraw
    const secleted = document.getElementById(id);
    secleted.classList.remove('hidden');8
    
}
