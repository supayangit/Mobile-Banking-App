document.getElementById("bonus-btn").addEventListener("click", function () {
    const bonusCoupon = getValueFromInput("bonus-coupon");
    const CurrentBalance = getBalance();
    if (bonusCoupon === "PAYOO20") {
        const newBalance = CurrentBalance + 20;
        alert("Congratulations! You have received a bonus of 20 units.");
        setBalance(newBalance);
    } else if (bonusCoupon === "PAYOO10") {
        const newBalance = CurrentBalance + 10;
        alert("Congratulations! You have received a bonus of 10 units.");
        setBalance(newBalance);
    } else {
        alert("Invalid bonus coupon code.");
    }
});