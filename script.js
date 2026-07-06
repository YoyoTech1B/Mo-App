const suggestions = document.querySelectorAll(".suggestion");
const input = document.getElementById("userInput");

suggestions.forEach(button => {

    button.addEventListener("click", () => {

        input.value = button.textContent.trim();

        input.focus();

    });

});
