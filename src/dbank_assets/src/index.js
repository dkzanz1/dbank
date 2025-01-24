import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  try {
    const currentAmount = await dbank.checkBalance();
    const valueElement = document.getElementById("value"); 
    if (valueElement) { 
      valueElement.innerText = Math.round(currentAmount * 100) / 100; 
    }
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission
  console.log("Submitted"); 
  // Add your form submission logic here (e.g., call dbank.topUp())
});
// import { dbank } from "../../declarations/dbank";

// window.addEventListener("load", async function() {
//     const currentAmount = await dbank.checkBalance();
//     document.getElementById("value").innerText =Math.round(currentAmount *100)/100;
// });
// document.querySelector("form").addEventListener("submit", async function(event){
// console.log("submmited");
// });


    
