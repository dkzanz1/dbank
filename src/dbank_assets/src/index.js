import { dbank } from "../../declarations/dbank";


window.addEventListener("load", async function () {
  console.log("finished loading!");

  const currentAmount = await dbank.checkBalance();
  console.log(currentAmount);
  update();
});
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("Submitted");
  const button = e.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  //line above disables button while sums input catches up
  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withDraw(outputAmount);
  }

  await dbank.compound();

update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");

});
async function update() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
}