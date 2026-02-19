document.getElementById("login-btn").addEventListener("click", function(){
    console.log("Login button clicked");
    //1. get the mobile number input
    const mobileNumber = document.getElementById("input-number").value;
    console.log("Mobile number entered:", mobileNumber)
    //2. get the pin input
    const pin = document.getElementById("input-pin").value;
    console.log("Pin entered", pin);
    // 3. match  
    if(mobileNumber === "01234567890" && pin === "1234"){
    // 3.1. true--- alert> homepage
    alert("Log in success");
    window.location.assign("/home.html");
    }else{
    // 3.2. false--- alert> return
    alert("Log in failed, please try again");
    return;
    }
})

