function extractNumber() {
    var typeInvoice = /F\/.+?\/SH/g;
    var numbersHTML = document.getElementById('number-invoice');
    var numbers = deleteSpaces(numbersHTML.value);
    var arrInvoicesMonth = numbers.match(typeInvoice);

    console.log(arrInvoicesMonth);
}


function deleteSpaces(numbers) {
    return numbers.replace(/ /g, "");
}




function creatInvoiceForEachMonth(str) {
    var serial = '';
    var numberInvoice;
    var monthInvoice;
    var yearInvoice;
    var indexInvoice;
    var serialType = /\//;

}


//
// function createArrNumbers(numbers) {
//     if (/,/.test(numbers)) {
//         return numbers.split(',')
//     }
// }