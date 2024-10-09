document.getElementById('adminLoginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace this with real authentication logic)
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
