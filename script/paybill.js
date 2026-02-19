document.getElementById("paybill-btn").addEventListener("click", function () {

    const paybillTarget = getValueFromInput("paybill-target");
    if (paybillTarget == "Select a Target") {
        alert("Please select a target");
        return;
    }

    const AccountNumber = getValueFromInput("paybill-number");
    if (AccountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    const paybillAmount = getValueFromInput("paybill-amount");
    const newBalance = getBalance() - Number(paybillAmount);

    const paybillPin = getValueFromInput("paybill-pin");


    if (paybillPin == "1234") {
        alert(`Paybill to ${paybillTarget} at ${new Date()} successful`);
        setBalance(newBalance);

        
        // step 1 get the container of history
        const history = document.getElementById("history-container");
        // step 3 create a new history item
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-sm w-[400px] mx-auto rounded-xl flex items-center px-5">
                <div class="bg-base-200 w-[72px] h-[72px] rounded-full m-4 justify-center items-center flex">
                    <img class="w-2/3 h-auto" src="assets/opt-5.png" alt="transation img" />
                </div>
                <div class="card-body">
                    <h2 class="card-title">Pay Bill</h2>
                    <p class="text-neutral-500/50">Bill Paid to ${paybillTarget} at ${new Date()} of amount ${paybillAmount}</p>
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

    console.log("target", paybillTarget, "account number", AccountNumber, "amount", paybillAmount, "pin", paybillPin);
})