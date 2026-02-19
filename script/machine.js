//machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(`Value from input ${id}:`, value);
    return value;
}

//get balance
function getBalance(){
    const Balance = document.getElementById("balance").innerText;
    console.log("current balance:", Number(Balance));
    
    return Number(Balance);
}

// set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//hide and show
function showSection(sectionId){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const sendmoney = document.getElementById("send-money");
    const paybill = document.getElementById("paybill"); 
    const bonus = document.getElementById("bonus"); 
    const history = document.getElementById("history");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    sendmoney.classList.add("hidden");
    paybill.classList.add("hidden");
    bonus.classList.add("hidden");
    history.classList.add("hidden");

    const selected = document.getElementById(sectionId).classList.remove("hidden");
}