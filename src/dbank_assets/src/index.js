import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() 
  {
    const currentAmount = await dbank.checkBalance();
      this.document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100; 
  });
 
 // Add your form submission logic here (e.g., call dbank.topUp())
document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault(); 
  // Prevent default form submission
  // console.log("Submitted"); 
const inputAmount = parseFloat(document.getElementById("input-amount").value);
const outputAmount = dparseFloat(document.getElementById("withdrawal-amount").value);

await dbank.topUp(inputAmount);
});



    
