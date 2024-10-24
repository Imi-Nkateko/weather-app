const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".inputEl");
const displayEl = document.querySelector(".weather-data");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const  city = inputEl.value;

    if (city === "") {   
        displayEl.style.display = "block";
        handleError("Please Enter City");     
    }
})




function handleError(message) {
   
    const errorDisplay = document.createElement("p");
    errorDisplay.classList.add("error");
    errorDisplay.textContent = message
     
    displayEl.appendChild(errorDisplay);
}