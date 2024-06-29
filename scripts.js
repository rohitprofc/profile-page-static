document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            alert('Thank you for your message!');
            form.reset();
        }
    });

    function validateForm(name, email, message) {
        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Tab switching
    const tablinks = document.querySelectorAll('.tablink');
    const tabcontents = document.querySelectorAll('.tabcontent');

    tablinks.forEach(tab => {
        tab.addEventListener('click', (event) => {
            openTab(event, tab.textContent.toLowerCase());
        });
    });

    function openTab(event, tabName) {
        tabcontents.forEach(content => {
            content.style.display = 'none';
        });
        tablinks.forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabName).style.display = 'block';
        event.currentTarget.classList.add('active');
    }
});

// Dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}