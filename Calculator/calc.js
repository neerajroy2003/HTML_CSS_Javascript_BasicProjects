var screen = document.getElementById('screen');

function btnclick(value) {
    if (screen.value === "0" && value !== ".") {
        screen.value = value;
    }
    else if (['+', '-', '*', '/'].includes(screen.value.slice(-1)) && ['+', '-', '*', '/'].includes(value)) {
        return;
    } 
    else {
        screen.value += value;
    }
}

function clearScreen() {
    screen.value = "";
}

function result() {
    var res = eval(screen.value)
    screen.value = res;
}
