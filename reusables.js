const focusOn = (id, placeholder) => {
    const element = document.getElementById(id);
    element.removeAttribute("placeholder");
    element.style.border = "1px solid #59920f";
    element.style.padding = "1.5rem 1rem 0.5rem 1rem";
    element.style.boxShadow = "0 0 5px #59920f";
    element.style.transition = "all 0.2s";
    element.previousElementSibling.innerText = placeholder;
    element.previousElementSibling.classList.add("input-label");
}
const focusOut = (id) => {
    const element = document.getElementById(id);
    element.style.border = "1px solid #b2b6a6";
    element.style.boxShadow = "none";
    if (!element.value) {
        element.setAttribute("placeholder", element.previousElementSibling.innerText)
        element.style.padding = "1rem";
        element.previousElementSibling.innerText = "";
        element.previousElementSibling.classList.remove("input-label");
    }
}