let amount = document.getElementById("loan-amount");
let years = document.getElementById("loan-years");
let rate = document.getElementById("loan-rate");
let monthly = 0;

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      updateMonthly(monthly);
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amount.value = "50000";
  years.value = "5";
  rate.value = "8";
  calculateMonthlyPayment()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthly = (values.amount * ((values.rate)/1200))/(1 - (1+(values.rate)/1200) ** (-((values.years)*12)));
  monthly = monthly.toFixed(2);
  return monthly = monthly.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-value").innerText = "$ " + monthly;
}