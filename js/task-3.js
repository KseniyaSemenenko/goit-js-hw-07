const inputEl = document.querySelector("#name-input");

const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", event => {
    const userText = inputEl.value.trim();
    userText === "" ? spanEl.textContent = "Anonymous" : spanEl.textContent = userText;
    })
