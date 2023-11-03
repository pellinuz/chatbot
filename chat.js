const userMessage = ["Hi", "How are you?", "Can you help me?", "Bye"];
const botReply = ["Hello!", "I'm good. How about you?", "Of course! What do you need?", "Goodbye! Have a nice day!"];
const alternative = ["Sorry, I didn't get that.", "Could you please repeat?"];

function sendMessage() {
  let input = document.getElementById("user-input").value;
  document.getElementById("message-section").innerHTML += `<div class="message" id="user">${input}</div>`;
  document.getElementById("user-input").value = "";
  output(input);
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  if(compare(userMessage, botReply, text)) {
    product = compare(userMessage, botReply, text);
  } else if(text.match(/thank/gi)) {
    product = "You're welcome!";
  } else {
    product = alternative[Math.floor(Math.random()*alternative.length)];
  }
  document.getElementById("message-section").innerHTML += `<div class="message" id="bot">${product}</div>`;
}

function compare(arr, array, string) {
  let item;
  for(let x=0; x<arr.length; x++) {
    if(string.includes(arr[x])) {
      item = array[x];
      break;
    }
  }
  return item;
}
