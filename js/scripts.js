function numberButton(value, name) {
    button = document.getElementById(name);
    inputD = document.getElementById("input");
    inputD.value = inputD.value.concat(value);
}

function operators(value, name) {
    button = document.getElementById(name);
    inputD = document.getElementById("input");
    inputValue = inputD.value;
    lastValue = inputValue.slice(-1);

    if (value !== "=" && (lastValue !== ("/") && lastValue !== ("*") && lastValue !== ("-") && lastValue !== (".") && lastValue !== ("="))) {
        inputD.value = inputD.value.concat(value);
    } else {
        inputD.value = eval(inputD.value);
    }
}

function additional(name) {
    console.log(name);
    button = document.getElementById(name);
    inputD = document.getElementById("input");
    inputValue = inputD.value;
    lastValue = inputValue.slice(-1);
    if (name === "all_cancel") {
        inputD.value = "";
    }
    if (name === "clear") {
        inputD.value = inputD.value.substring(0, inputD.value.length - 1);
    }
    if (name === 'off') {
        buttonOn = document.getElementById("on");
        inputD.className = "inputOff";
        buttonOn.classList.remove("buttonOn");
        buttonOn.className = "button button5";
        button.className = "buttonOff";
    }
    if (name === 'on') {
        buttonOff = document.getElementById("off");
        inputD.className = "inputDisplay";
        buttonOff.classList.remove("buttonOff");
        buttonOff.className = "button button3";
        button.className = "buttonOn";
        inputD.value = "";
    }
}