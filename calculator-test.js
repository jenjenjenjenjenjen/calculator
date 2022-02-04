
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 8,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('267.72');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 8,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('267.72');
});




