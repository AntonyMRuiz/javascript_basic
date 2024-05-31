document.addEventListener('DOMContentLoaded', (event) => {
    fetch('../pages/components/navBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});