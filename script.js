function generatePin() {
    let randomNum = Math.random() * 1000;
    let randomPin = Math.ceil(randomNum);
    if (randomPin < 1000) {
        randomPin = randomPin + 1000;
    }
    document.getElementById('generate-pin').value = randomPin;
}
function insert(num) {
    document.getElementById('pin-display').value += num;
}
function pinMatch() {
    let generatePin = document.getElementById('generate-pin').value;
    let userPin = document.getElementById('pin-display').value;
    if (generatePin == "") {
        alert("Please, click 'Generate pin' button");
    }
    else if (userPin == "") {
        alert('Please enter pin');
    }
    else if (generatePin == userPin) {
        document.getElementById('match').style.display = 'block';
        document.getElementById('not-match').style.display = 'none';
    }
    else {
        document.getElementById('match').style.display = 'none';
        document.getElementById('not-match').style.display = 'block';

        let tryChance = document.getElementById('try-left').innerText -= 1;
        if (tryChance == 0) {
            document.getElementById('submit').disabled = true;
        }
    }
}
function clean() {
    document.getElementById('pin-display').value = "";
}
function backspace() {
    let given = document.getElementById('pin-display').value;
    document.getElementById('pin-display').value = given.substring(0, given.length - 1);
}