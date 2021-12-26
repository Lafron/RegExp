const select = document.querySelector("#objectType");
const inputArr = document.querySelectorAll("input");

inputArr.forEach(input => {
    input.addEventListener("input", e => {
        e.target.value = e.target.value.replace(/\D+/,"");
    });
});