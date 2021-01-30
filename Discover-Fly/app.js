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
  const firstClass = getInputNumber("firstClass");
  const economyClass = getInputNumber("economy");

  //Calculating Subtotal:
  const subTotal = firstClass * 150 + economyClass * 100;

  //Calculating Vat:
  const vat = Math.round(subTotal * 0.1);

  //Calculating GrandTotal:
  const grandTotal = subTotal + vat;

  document.getElementById("subTotal").innerText = "$" + subTotal;
  document.getElementById("vat").innerText = "$" + vat;
  document.getElementById("grandTotal").innerText = "$" + grandTotal;

  //Sending firstClass Tickets, EconomyTickets, Total Tickets and Total Amounts By Calling Function:
  invoiceDetails(firstClass, economyClass, firstClass+economyClass, grandTotal);
}

//Get First Class and Economy Class Input Fields value:
function getInputNumber(ticketClass) {
  const ticketClassInput = document.getElementById(ticketClass + "-ticketInput");
  const newTicketClassInput = parseInt(ticketClassInput.value);
  return newTicketClassInput;
}

//Book Now Button Event Handler:
document.getElementById("bookNowButton").addEventListener("click", function() {
  const ticketBookingForm = document.getElementById("Ticket-BookingForm");
  ticketBookingForm.style.display = "none";
  const invoiceShow = document.getElementById("TicketBooking-Invoice");
  invoiceShow.style.display = "block";
});


//Invoice Function:
function invoiceDetails(firstClassTickets, economyTickets, totalTickets, totalAmounts) {
  document.getElementById("firstClassTickets").innerText = firstClassTickets;
  document.getElementById("economyClassTickets").innerText =  economyTickets;
  document.getElementById("totalTickets").innerText = totalTickets;
  document.getElementById("totalAmounts").innerText = "$"+ totalAmounts;
}