let input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    input3 = document.getElementById("input3"),
    input4 = document.getElementById("input4");

function deciToAll(decimal) {
    input2.placeholder = decimal.toString(2).toUpperCase();
    input3.placeholder = decimal.toString(8).toUpperCase();
    input4.placeholder = decimal.toString(16).toUpperCase();
}

function binToAll(binary) {
    let decimal = parseInt(binary, 2);
    input1.placeholder = decimal.toString(10).toUpperCase();
    input3.placeholder = decimal.toString(8).toUpperCase();
    input4.placeholder = decimal.toString(16).toUpperCase();
}

function octToAll(octal) {
    let decimal = parseInt(octal, 8);
    input1.placeholder = decimal.toString(10).toUpperCase();
    input2.placeholder = decimal.toString(2).toUpperCase();
    input4.placeholder = decimal.toString(16).toUpperCase();
}

function hexToAll(hexadecimal) {
    let decimal = parseInt(hexadecimal, 16);
    input1.placeholder = decimal.toString(10).toUpperCase();
    input2.placeholder = decimal.toString(2).toUpperCase();
    input3.placeholder = decimal.toString(8).toUpperCase();
}

document.getElementById("convert").addEventListener("click", function () {
    convertAllFields();
});

function convertAllFields() {
    let decimal = parseInt(input1.value.trim(), 10);
    let binary = input2.value.trim();
    let octal = input3.value.trim();
    let hexadecimal = input4.value.trim();

    if (!isNaN(decimal)) {
        deciToAll(decimal);
        input1.placeholder = decimal.toString(10).toUpperCase();
    }

    if (/^[01]+$/.test(binary)) {
        binToAll(binary);
        input2.placeholder = binary.toUpperCase();
    }

    if (/^[0-7]+$/.test(octal)) {
        octToAll(octal);
        input3.placeholder = octal.toUpperCase();
    }

    if (/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
        hexToAll(hexadecimal.toUpperCase());
        input4.placeholder = hexadecimal.toUpperCase();
    }

    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertAllFields();
    }
});
