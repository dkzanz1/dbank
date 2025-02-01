import { dbank } from "../../declarations/dbank";


window.addEventListener("load", async function() {
  console.log("finished loading!");
 
  const currentAmount = await dbank.checkBalance();
  console.log(currentAmount);
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;
  console.log(currentAmount);
});
// document.querySelector("form").addEventListener ("submit", async function(e){
// console.log("Submitted");
// e.preventDefault();
//   const button =e.target.querySelector("#submit-btn");

// const inputAmount = parseFloat(document.getElementById("input-amount").value);
// const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

// button.setAttribute("disabled", true);
// //line above disables button while sums input catches up
// await dbank.topUp(inputAmount);

// const currentAmount = await dbank.checkBalance();
// document.getElementById("value").innerText = Math.round(currentAmount *100)/100;

// document.getElementById("input-amount").value="";
// button.removeAttribute("disabled");

// });





