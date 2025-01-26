import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function(){
  const currentAmount = dbank.checkBalance();
  document.getElementById("value").innerText = currentAmount;
  console.log("finishing loading");
})






    
