let form = document.querySelector("form");
let emailInput = document.getElementById("emailInput");
let submitBtn = document.getElementById("btn");
let errorMsg = document.querySelector(".errorMsg");
let application = document.querySelector(".app");
let subscribed = document.querySelector(".subscribed");
let missBtn = document.getElementById("miss-btn");
let emailSubsSpan = document.getElementById("emailSubsSpan");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", sendInfo);

function sendInfo() {
  let val = emailInput.value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (val.match(pattern)) {
    application.classList.add("hide");
    subscribed.classList.remove("hide");
    emailSubsSpan.innerHTML = val;
  } else {
    errorMsg.innerHTML = "Valid Email Required";
  }
}

missBtn.addEventListener("click", () => {
  application.classList.remove("hide");
  subscribed.classList.add("hide");
  emailInput.value = "";
});
