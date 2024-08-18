const message = "Simple DOM Manipulation"
const wordChange = "Success!"

document.getElementById("root").innerHTML = message;

console.log(message);

function ChangeWords() {
    document.getElementById("message").innerHTML = wordChange;
}

document.getElementById("message").addEventListener("click", ChangeWords)
