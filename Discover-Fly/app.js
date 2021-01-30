//First Class Increment Button Handler:
const firstClassAddButton = document.getElementById("firstClass-ticketIncrement");
firstClassAddButton.addEventListener("click", function () {
  ticketClassHandler(true, "firstClass");
});

//First Class Decrement Button Handler:
const firstClassDecreaseButton = document.getElementById("firstClass-ticketDecrement");
firstClassDecreaseButton.addEventListener("click", function () {
  ticketClassHandler(false, "firstClass");
});

//Economy Class Increment Button Handler:
const economyAddButton = document.getElementById("economy-ticketIncrement");
economyAddButton.addEventListener("click", function () {
  ticketClassHandler(true, "economy");
});

//Economy Class Decrement Button Handler:
const economyDecreaseButton = document.getElementById("economy-ticketDecrement");
economyDecreaseButton.addEventListener("click", function () {
  ticketClassHandler(false, "economy");
});

//Ticket Classification Handler:
function ticketClassHandler(isTicketIncrease, ticketType) {
  const ticketInput = document.getElementById(ticketType + "-ticketInput");
  const ticketCount = getInputNumber(ticketType);
  let ticketNewCount = ticketCount;
  if (isTicketIncrease === true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isTicketIncrease === false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  let ticketPrice = 0;
  if (ticketType === "firstClass") {
    ticketPrice = ticketNewCount * 150;
  }
  if (ticketType === "economy") {
    ticketPrice = ticketNewCount * 100;
  }
  document.getElementById(ticketType + "Ticket").innerText = "$" + ticketPrice;
  calculatePrice();
}

//Calculate Price:
function calculatePrice() {
  const firstClassPrice = getInputNumber("firstClass");
  const economyClassPrice = getInputNumber("economy");
  const subTotal = firstClassPrice * 150 + economyClassPrice * 100;
  const vat = Math.round(subTotal * 0.1);
  const grandTotal = subTotal + vat;
  document.getElementById("subTotal").innerText = "$" + subTotal;
  document.getElementById("vat").innerText = "$" + vat;
  document.getElementById("grandTotal").innerText = "$" + grandTotal;
}

//Get First Class and Economy Class Input Fields value:
function getInputNumber(ticketClass) {
  const ticketClassInput = document.getElementById(
    ticketClass + "-ticketInput"
  );
  const newTicketClassInput = parseInt(ticketClassInput.value);
  return newTicketClassInput;
}
