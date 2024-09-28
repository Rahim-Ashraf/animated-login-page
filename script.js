
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginBtn = document.getElementById("login-btn");
    const logo = document.getElementById("logo-image-container");
    const logoTitle = document.getElementById("logo-title");
    const enrollContainer = document.getElementById("enroll-container");
    const form = document.getElementById("form");
    const imageContainer = document.getElementById("image-container");
    const formContainer = document.getElementById("form-container");


    logoTitle.classList.add("trans-with-scale");
    enrollContainer.classList.add("trans-with-opa");
    form.classList.add("trans-with-opa");


    setTimeout(() => {
        imageContainer.classList.add("trans-with-scale-image");
        logo.classList.add("logo-image-container-effect");
        setTimeout(() => {
            logoTitle.classList.remove("trans-with-scale");
            enrollContainer.classList.remove("trans-with-opa");
            form.classList.remove("trans-with-opa");
            imageContainer.classList.remove("trans-with-scale-image");
            logo.classList.remove("logo-image-container-effect");
            window.style

        }, 7000)

    }, 500)


})

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
