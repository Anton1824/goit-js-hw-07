const userName = document.querySelector("input#name-input");
const newName = document.querySelector("span#name-output");
userName.addEventListener("input", changeName)
function changeName() {
    if (userName.value.trim() !== "") {
     newName.textContent = userName.value.trim();
    } else {
        newName.textContent = "Anonymous";
    }
    return;
}