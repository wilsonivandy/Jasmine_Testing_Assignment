describe("Helpers Testing", function() {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 50;
        submitPaymentInfo();
    });
  
    it('should calculate correct bill amounts using sumPaymentTotal', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(200);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should calculate correct tip amounts using sumPaymentTotal', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(50);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(70);
    });

    it('should calculate correct tip percentage amounts using sumPaymentTotal', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(25);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(45);
    });

    it('should calculate correct tip percentage', function (){
        expect(calculateTipPercent(100,40)).toEqual(40);
        expect(calculateTipPercent(500,25)).toEqual(5);
    });

    it('should append newly created element to tr using appendTr', function() {
        let newTr = document.createElement('tr');
        expect(appendTd(newTr, 'new'));
        expect(newTr.children.length).toEqual(1);
    });

    it('should have a delete button appended to tr', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
    });
  });
  