var decimal = document.getElementById('decimal');
var conv = document.getElementById('conv');
var select = document.getElementById('a');
// binary to conversion....
function convert(number) {
  var convertedNumber = parseFloat(number);
  if (select.value == "Binary") {
    conv.value = convertedNumber.toString(2);
  } else if (select.value == "Decimal") {
    conv.value = convertedNumber;
  } else if (select.value == "Hexadecimal") {
    conv.value = convertedNumber.toString(16);
  } else {
    conv.value = convertedNumber.toString(8);
  }
}
// conversion to binary....
function conversion(num) {
  var isValid = true;

  if (select.value == "Binary") {
    for (var i = 0; i < num.length; i++) {
      if (num[i] != '0' && num[i] != '1') {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      decimal.value = parseInt(num, 2);
    }
  }
   else if (select.value == "Decimal") {
    decimal.value = parseInt(num);
  }
   else if (select.value == "Hexadecimal") {
    for (var i = 0; i < num.length; i++) {
      if (
        !(
          (num[i] >= '0' && num[i] <= '9') ||
          (num[i] >= 'a' && num[i] <= 'f') ||
          (num[i] >= 'A' && num[i] <= 'F')
        )
      ) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      decimal.value = parseInt(num, 16);
    }
  }
   else {
    for (var i = 0; i < num.length; i++) {
      if (num[i] < '0' || num[i] > '7') {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      decimal.value = parseInt(num, 8);
    }
  }
// checking validation
  var invalidElement = document.getElementById('invalid');
  if (isValid) {
    invalidElement.style.visibility = "hidden";
    invalidElement.style.transform = "scale(0)"
  } else {
    invalidElement.style.visibility = "visible";
    invalidElement.style.transform = "scale(1)";
  }
}

decimal.addEventListener('input', () => {
  convert(decimal.value);
});
conv.addEventListener('input', () => {
  conversion(conv.value);
});

select.addEventListener('change', () => {
  convert(decimal.value);
  if (decimal.value.length == 0) {
    conv.value = ""
  }
  if (conv.value.length == 0) {
    decimal.value = ""
  }
});
