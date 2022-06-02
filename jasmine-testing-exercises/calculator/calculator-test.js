it('should calculate the monthly rate correctly', function () {
  let values = {amount: 50000, years: 5, rate: 8};
  expect(calculateMonthlyPayment(values)).toMatch("1013.82");
});


it("should return a result with 2 decimal places", function() {
  let values = {amount: 60000, years: 6, rate: 7};
  expect(calculateMonthlyPayment(values)).toMatch("1022.94");
  values = {amount: 123456, years: 7, rate: 8};
  expect(calculateMonthlyPayment(values)).toMatch("1924.21");
});

/// etc
