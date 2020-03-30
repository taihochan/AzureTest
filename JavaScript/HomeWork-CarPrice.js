var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

var sum = 0;
Prices.forEach(function(item) {
    sum += item * 1.05;
})
console.log(sum);

/*-------------------*/
var Cars_Prices = Array();

function cal(price) {
    return (price * 0.05 + price)
}
for (let i = 0; i < Cars.length; i++) {
    Cars_Prices.push([Cars[i], Prices[i], cal(Prices[i])]);
}
console.log(Cars_Prices);