
const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login");
}

document.getElementById("idInput").addEventListener("click", () => {
    focusOn("idInput", "Online ID")
});
document.getElementById("passInput").addEventListener("click", () => {
    focusOn("passInput", "Password")
});

document.getElementById("idInput").addEventListener("blur", () => {
    focusOut("idInput")
});
document.getElementById("passInput").addEventListener("blur", () => {
    focusOut("passInput")
});

document.getElementById("show-pass").addEventListener("click", () => {
    document.getElementById("show-pass").previousElementSibling.setAttribute("type", "text")
    document.getElementById("show-pass").style.display = "none";
    document.getElementById("hide-pass").style.display = "block";
})
document.getElementById("hide-pass").addEventListener("click", () => {
    document.getElementById("show-pass").previousElementSibling.setAttribute("type", "password")
    document.getElementById("hide-pass").style.display = "none";
    document.getElementById("show-pass").style.display = "block";
})




const handleFocus = (e) => {
    e.target.style.border = "1px solid red";
}
