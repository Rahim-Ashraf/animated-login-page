const focusOn = (id, placeholder) => {
    const element = document.getElementById(id);
    element.removeAttribute("placeholder");
    element.style.border = "1px solid #59920f";
    element.style.padding = "1.5rem 1rem 0.5rem 1rem";
    element.style.boxShadow = "0 0 5px #59920f";
    element.style.transition = " 0.2s ease";
    element.style.transition = " 0.2s ease";
    element.previousElementSibling.innerText = placeholder;
    element.previousElementSibling.classList.add("input-label");
}
const focusOut = (id) => {
    const element = document.getElementById(id);
    element.style.border = "1px solid #b2b6a6";
}