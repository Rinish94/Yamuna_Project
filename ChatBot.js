function talk() {
  let know = {
    Hi:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    hi:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    HELLO:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    hello:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    "How are you": "Good 😊",
    "how are you": "Good 😊",
    shakes: "Which flavour you want to buy?",
    vanilla:
      "We have a Vanilla Coffee Shakes with natural extracts, Shop Now !!! ",
    berry:
      "We have a Oatmeal Berry Shakes with natural extracts, Shop Now !!! ",
    orange:
      "We have a Valencia orange Shakes with natural extracts, Shop Now !!! ",
    Orange:
      "We have a Valencia orange Shakes with natural extracts, Shop Now !!! ",
    apple: "We have a Rich Apple Shakes with natural extracts, Shop Now !!! ",
    Apple: "We have a Rich Apple Shakes with natural extracts, Shop Now !!! ",
    ok: "Thank You So Much 😊",
    Bye: "Okay! Will meet soon. TC..",
  };
  let user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Oops! I think you entered a wrong option. Please select an option from below <br>";
  }
}

let addBot = document.querySelector(".bot");
let modalBox = document.querySelector(".modal-box");
let modalCloseIcon = document.querySelector(".modal-close_icon");

addBot.addEventListener("click", function () {
  modalBox.classList.add("bg-on");
});
modalCloseIcon.addEventListener("click", function () {
  modalBox.classList.remove("bg-on");
});
