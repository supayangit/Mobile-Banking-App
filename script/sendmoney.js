document.getElementById("send-money-btn").addEventListener("click", function () {
    const sendMoneyNumber = getValueFromInput("send-money-number");
    const sendMoneyAmount = getValueFromInput("send-money-amount");
    const CurrentBalance = getBalance();
    const sendMOneyPin = getValueFromInput("send-money-pin");
    
    const newBalance = CurrentBalance - sendMoneyAmount;
    console.log("New Balance:", newBalance);

    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    if(sendMoneyNumber.length !== 11){
        alert("Invalid Mobile Number");
        return;
    }
    if(sendMOneyPin === "1234"){
        alert("Send Money success");
        setBalance(newBalance);

        
        // step 1 get the container of history
        const history = document.getElementById("history-container");
        // step 3 create a new history item
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-sm w-[400px] mx-auto rounded-xl flex items-center px-5">
                <div class="bg-base-200 w-[72px] h-[72px] rounded-full m-4 justify-center items-center flex">
                    <img class="w-2/3 h-auto" src="assets/opt-3.png" alt="transation img" />
                </div>
                <div class="card-body">
                    <h2 class="card-title">Send Money</h2>
                    <p class="text-neutral-500/50">Send money to ${sendMoneyNumber} at ${new Date()} of amount ${sendMoneyAmount}</p>
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
