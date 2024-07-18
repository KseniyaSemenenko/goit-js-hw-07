const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault()
    
    const formData = new FormData(form);
    const results = {};
    let formIsValid = true;
    formData.forEach((value, key) => {
        const elValue = value.trim();
        results[key] = elValue;
        if (elValue === "") {
            formIsValid = false;
        }
    });
    if (!formIsValid) {
        alert('All form fields must be filled in');
        return;
    }
    console.log(results);
      
    
    form.reset();
});



