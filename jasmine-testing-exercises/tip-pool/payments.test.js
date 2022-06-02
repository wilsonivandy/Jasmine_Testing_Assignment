describe("Payments testing", function() {
    beforeEach(function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 4;
    });

    it('should add new payment info when submitPaymentInfo is run', function() {
        //expect(Object.keys(allPayments).length).toEqual(0);

        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('4');
        expect(allPayments['payment1'].tipPercent).toEqual(8);
    });

    it('shouldnt add an invalid input', function() {
        billAmtInput.value ='';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create new current payment and add to table', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curTd = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTd.length).toEqual(4);
        expect(curTd[0].innerText).toEqual('$50');
        expect(curTd[1].innerText).toEqual('$4');
        expect(curTd[2].innerText).toEqual('8%');
        //expect(curTd[3].innerText).toEqual('X')
    });

    it('should correctly create current payment with given details', function() {
        let expPayment = {billAmt: '50', tipAmt: '4', tipPercent: 8};
        expect(createCurPayment()).toEqual(expPayment);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});