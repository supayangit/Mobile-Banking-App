document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number");
    const cashoutAmount = getValueFromInput("cashout-amount");
    const CurrentBalance = getBalance();
    const cashoutPin = getValueFromInput("cashout-pin");

    const newBalance = CurrentBalance - cashoutAmount;
    console.log("New Balance:", newBalance);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    if (cashoutNumber.length !== 11) {
        alert("Invalid Mobile Number");
        return;
    }
    if (cashoutPin === "1234") {
        alert("Cashout success");
        setBalance(newBalance);

        // step 1 get the container of history
        const history = document.getElementById("history-container");
        // step 3 create a new history item
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-sm w-[400px] mx-auto rounded-xl flex items-center px-5">
                <div class="bg-base-200 w-[72px] h-[72px] rounded-full m-4 justify-center items-center flex">
                    <img class="w-2/3 h-auto" src="assets/opt-2.png" alt="transation img" />
                </div>
                <div class="card-body">
                    <h2 class="card-title">Cash Out</h2>
                    <p class="text-neutral-500/50">Cashout money from ${cashoutNumber} at ${new Date()} of amount ${cashoutAmount}</p>
                </div>
                <button class="card-actions justify-end cursor-pointer">
                    <i class="fa-solid fa-ellipsis rotate-90 text-xl text-neutral-500/50"></i>
                </button>
            </div>
`;
        // step 4 add the new history item to the container
        history.appendChild(newHistory);
    } else {
        alert("Invalid Pin");
        return;
    }
})


// document.getElementById("cashout-btn").addEventListener("click", function(){
//     console.log("Cashout button clicked");

//     const cashoutNumber = document.getElementById("cashout-number").value;
//     const cashoutAmount = document.getElementById("cashout-amount").value;
//     const cashoutPin = document.getElementById("cashout-pin").value;
//     const Balance = document.getElementById("balance").innerText;

//     console.log("Cashout number entered:", cashoutNumber);
//     console.log("Cashout amount entered:", cashoutAmount);
//     console.log("Cashout pin entered:", cashoutPin);
//     console.log("Current balance:", Balance);

//     //math claculation
//     const newBalance = parseInt(Balance) - cashoutAmount;

//     if(cashoutNumber.length !== 11){
//         alert("Invalid Mobile Number");
//         return;
//     }

//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     console.log("new balance:", newBalance);

//     if(cashoutPin === "1234"){
//         alert("Cashout success");
//         document.getElementById("balance").innerText = newBalance;

//     }else{
//         alert("Invalid Pin");
//         return;
//     }
// });

