$(document).ready(function() {
    $(".calc-area button").click(function () {
        var tempMinuts = $(".calc-area input[name='minuts']").val(),
            tempType = $(".calc-area select").val();
        calculator.quantityOfMinuts = tempMinuts;
        calculator.typeOfCommunication = tempType;
        var result = calculator.calculate();
        $(".calc-area input[name='result']").val(result);
    })
});

var calculator = {
    quantityOfMinuts: "undefined",
    typeOfCommunication: "undefined",
    priceFor4g: 1.5,
    priceFor3g: 1,
    priceForSputnik: 20,
    calculate: function () {
        if (this.typeOfCommunication === "4G") {
            return this.quantityOfMinuts * this.priceFor4g;
        } else if (this.typeOfCommunication === "3G") {
            var sum = 0,
                price = this.priceFor3g;
            for (var i = 0; i < this.quantityOfMinuts; i++) {
                if (!(i % 100) && (i > 0)) {
                    price -= 0.1;
                }
                sum += price;
            }
            sum = Math.floor(sum);
            return sum;
        } else {
            return ((this.quantityOfMinuts - 10) * 3) + this.priceForSputnik;
        }
    }
};
