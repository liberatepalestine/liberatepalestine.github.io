"use strict";

function send() {
    let a = document.getElementById('fn').value;
    let b = document.getElementById('ln').value;
    let c = document.getElementById('cty').value;
    if (a == "") {
        a = "unknown"
}
    if (b == "") {
        b = "unknown"
}
    if (c == "") {
        c = "unknown"
}
    document.getElementById('result').innerHTML = "Letter sent from " + c + " thank you " + a + " " + b + " !";
/*    document.getElementById('result').innerHTML = document.getElementById('fn').value;
*/    return false;
}

document.getElementById('send').addEventListener('click', send);
