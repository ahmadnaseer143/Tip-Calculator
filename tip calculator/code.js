function calculatetip(){
    var amount=document.getElementById("bill_amount").value;
    var tippercent=document.getElementById("tip_percent").value;
    var tip=(tippercent/100)*amount;
    var totalbill=Number(amount) + tip;
    document.getElementById("tip_amount").value=tip;
    document.getElementById("total_bill").value=totalbill;
}
document.getElementById("calculate_button").addEventListener("click",calculatetip);