document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields');
        return;
    }

    alert('Thank you for reaching out! Our customer care helpline will reachout to you soon.');
    document.getElementById('contactForm').reset();
});