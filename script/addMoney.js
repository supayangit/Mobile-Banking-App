document.getElementById("add-money-btn").addEventListener("click", function () {

    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select a Bank") {
        alert("Please select a bank");
        return;
    }

    const AccountNumber = getValueFromInput("add-money-number");
    if (AccountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    const addMoneyAmount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(addMoneyAmount);

    const addMoneyPin = getValueFromInput("add-money-pin");


    if (addMoneyPin == "1234") {
        alert(`Add money from ${bankAccount} at ${new Date()} successful`);
        setBalance(newBalance);
        // step 1 get the container of history
        const history = document.getElementById("history-container");
        // step 3 create a new history item
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
           <div class="card lg:card-side bg-base-100 shadow-sm w-[400px] mx-auto rounded-xl flex items-center px-5">
                <div class="bg-base-200 w-[72px] h-[72px] rounded-full m-4 justify-center items-center flex">
                    <img class="w-2/3 h-auto" src="assets/opt-1.png" alt="transation img" />
                </div>
                <div class="card-body">
                    <h2 class="card-title">Add Money</h2>
                    <p class="text-neutral-500/50">Added money from ${bankAccount} account no: ${AccountNumber} at ${new Date()} with amount ${addMoneyAmount}</p>
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

    console.log("bank", bankAccount, "account number", AccountNumber, "amount", addMoneyAmount, "pin", addMoneyPin);
})