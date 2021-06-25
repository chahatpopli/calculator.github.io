function dis(val) {
    var audioElement = new Audio('1.wav');
    audioElement.play();
    document.getElementById("result").value += val

}

//function that evaluates the digit and return result
function solve() {
    var audioElement = new Audio('1.wav');
    audioElement.play();
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display
function clr() {
    var audioElement = new Audio('1.wav');
    audioElement.play();
    document.getElementById("result").value = "0"
}

function bk() {
    var z = document.getElementById("result").value;
    document.getElementById("result").value = z.substr(0, z.length - 1);
}