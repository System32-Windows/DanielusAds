var currentad = -1
var user = -1
var ads = {
    0: ["miejsce.png", "Miejsce na reklamę", "https://system32-windows.github.io/Danielusads"],
}

var users = {
    0: ["test@test.test", "test", 0]
}

function send() {
    if (document.getElementById("email").value === users[0][0]) {
        if (document.getElementById("pass").value === users[0][1]) {
            user = 0;
        } else {
            document.getElementById("warn").innerHTML = "Nieprawidłowe hasło";
        }
    } else if (document.getElementById("email").value === users[1][0]) {
        if (document.getElementById("pass").value === users[1][1]) {
            user = 0;
        } else {
            document.getElementById("warn").innerHTML = "Nieprawidłowe hasło";
        }
    } else {
        document.getElementById("warn").innerHTML = "Nieprawidłowy email";
    }
}

function adload() {
    currentad = Math.floor(Math.random() * 1)
    document.getElementById("href").href = ads[currentad][2]
    document.getElementById("ad").src = `danieluscdn/${ads[currentad][0]}`
}

function statload() {

}