document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    
    // Simple logic to show it's working
    console.log("Logged in by dev_maruf");
    alert("Jutsu Activated!🐦‍🔥 Welcome, Shinobi " + name);
});