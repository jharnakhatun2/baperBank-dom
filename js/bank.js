// Bank Deposit calculation
//Deposit Calculation
document.getElementById("deposit_btn").addEventListener("click", function(){
    const depositField = document.getElementById("deposit");
    const newDepositValue = depositField.value;
    //clear deposit field
    depositField.value =" ";

    if(isNaN(newDepositValue) || (newDepositValue === "")){
        alert("Not a valid number");
        return;
    }
    const depositAmount = document.getElementById("deposit_amount");
    const previousDepositValue = depositAmount.innerText;
    const currentDepositValue = parseFloat(newDepositValue) + parseFloat(previousDepositValue);
    //update balance field
    const balanceText = document.getElementById("balance_amount");
    const previousBalance = balanceText.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(newDepositValue);
    balanceText.innerText = totalBalance;
    depositAmount.innerText = currentDepositValue;
     
});
//WithDraw calculation
document.getElementById("withdraw_btn").addEventListener("click", function(){
    const withdrawField = document.getElementById("withdraw");
    const newWithdraw = withdrawField.value;

    //clear withdraw field
    withdrawField.value = "";

    if(isNaN(newWithdraw) || (newWithdraw === "")){
        alert("Not valid Number");
        return;
    }
    const newWithdrawFloat = parseFloat(newWithdraw);
    const withDrawAmount = document.getElementById("withdraw_amount");
    const previousWithdraw = withDrawAmount.innerText;
    const previousWithdrawFlo = parseFloat(previousWithdraw);
    console.log(previousWithdraw);
    
    //update total balance
    const balanceText = document.getElementById("balance_amount");
    const previousBalance = balanceText.innerText;
    const previousBalanceIFlo = parseFloat(previousBalance);
    if(newWithdrawFloat > previousBalanceIFlo ){
        alert("Your withdraw have not sufficient balance!!!");
        return;
    }
    //step-4
    const currentWithdraw = newWithdrawFloat + previousWithdrawFlo;
    withDrawAmount.innerText = currentWithdraw;

    const totalBalance = previousBalanceIFlo - parseFloat(newWithdraw);
    balanceText.innerText = totalBalance;
    
});