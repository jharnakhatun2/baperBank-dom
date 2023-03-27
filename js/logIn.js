document.getElementById("submit_btn").addEventListener("click",function(){
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    if(email === "test@gmail.com" && password === "secret"){
        window.location.href = "bank.html";
    }else{
        alert("Invalid User");
    }
});

