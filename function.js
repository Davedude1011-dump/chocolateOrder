function resetAllChoc() {
    document.getElementById("twix").style.borderColor = ""
    document.getElementById("lion").style.borderColor = ""
    document.getElementById("mars").style.borderColor = ""
}
function resetAllName() {
    document.getElementById("mom").style.borderColor = ""
    document.getElementById("dad").style.borderColor = ""
}

function setPerson(ID) {
    resetAllName()
    document.getElementById(ID).style.borderColor = "green"

    document.getElementById("name").value = ID
}

function setChocolate(ID) {
    resetAllChoc()
    document.getElementById(ID).style.borderColor = "green"

    document.getElementById("msg").value = ID
}

var amount = 1

function amountUp() {
    if (amount < 5) {
        amount ++
    }
    else {
        amount = 1
    }
    document.querySelector(".counter").textContent = amount
    document.getElementById("amount").value = amount
}
function amountDown() {
    if (amount > 1) {
        amount --
    }
    else {
        amount = 5
    }
    document.querySelector(".counter").textContent = amount
    document.getElementById("amount").value = amount
}