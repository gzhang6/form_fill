function onSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    alert(`Form submitted! First name: ${firstName}, Last name: ${lastName}`);
}
