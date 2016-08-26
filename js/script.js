function extractNumber() {
    var typeInvoice = /F\/[\d,]+\/(0|1)\d\/2\d\d\d\/SH/g;
    var numbersHTML = document.getElementById('number-invoice');
    var numbers = deleteSpaces(numbersHTML.value);
    var arrInvoicesInputData = numbers.match(typeInvoice);

    var arrAllInvoices = [];
    for (var i = 0; i < arrInvoicesInputData.length; i++) {
        arrAllInvoices.push(createInvoicesForEachMonth(arrInvoicesInputData[i]));
    }

    createInvoicesListHTML(arrAllInvoices);
}



function deleteSpaces(numbers) {
    return numbers.replace(/\s/g, "");
}

function createInvoicesForEachMonth(str) {
    var serial = str.substring(0, 2);
    var numbersAll = str.slice(2, -11);
    var monthAndYears = str.slice(-11);
    var arrNumbersInvoicesForMonth = [];

    if (/,/.test(numbersAll)) {
        arrNumbersInvoicesForMonth = numbersAll.split(',');
    }   else arrNumbersInvoicesForMonth.push(numbersAll);

    var arrInvoicesForMonth = [];
    for (var i = 0; i < arrNumbersInvoicesForMonth.length; i++) {
        var invoice = serial + arrNumbersInvoicesForMonth[i] + monthAndYears;
        arrInvoicesForMonth.push(invoice);
    }
    return arrInvoicesForMonth;
}

function createInvoicesListHTML(arr) {
    var invoicesListHTML = document.getElementById('output-invoices');
    invoicesListHTML.innerHTML = ''; // need to discuss
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var pTeg = document.createElement('p');
            pTeg.innerHTML = arr[i][j];
            invoicesListHTML.appendChild(pTeg);
        }
    }
}