// Background Hearts
function spawnHearts() {
    const container = document.getElementById('heart-container');
    setInterval(() => {
        const h = document.createElement('div');
        h.innerHTML = '❤️';
        h.classList.add('floating-heart');
        h.style.left = Math.random() * 100 + 'vw';
        h.style.bottom = '-50px';
        h.style.fontSize = Math.random() * 20 + 10 + 'px';
        h.style.animationDuration = Math.random() * 2 + 2 + 's';
        container.appendChild(h);
        setTimeout(() => h.remove(), 4000);
    }, 400);
}
spawnHearts();

let userName = "";

function nextStep(step, progress) {
    if(step === 2) {
        userName = document.getElementById('userName').value;
        if(userName.trim() === "") { alert("Enter your name!"); return; }
    }
    document.getElementById('pb').style.width = progress + "%";
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    if(step === 6) setTimeout(() => nextStep(7, 100), 3000);
}

function triggerPrank() {
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    document.getElementById('prank-reveal').style.display = 'flex';
    document.getElementById('burn-message').innerText = `Listen ${userName}, did you really expect a Special Gift? 😂`;
}

function toggleShare() {
    document.getElementById('shareMenu').classList.toggle('active');
}

function share(platform) {
    const url = window.location.href;
    const text = "Look at this Valentine Reward! ❤️ ";
    let shareUrl = "https://god-x-maruf.github.io/valentine-special-gift/";
    
    if(platform === 'whatsapp') shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + url)}`;
    if(platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    if(platform === 'instagram') {
        // IG doesn't support direct URL sharing via link. 
        // Most common hack is to copy to clipboard or just alert.
        navigator.clipboard.writeText(text + " " + url);
        alert("Link copied! Paste it in your Instagram story or DM. ❤️");
        return;
    }
    window.open(shareUrl, '_blank');
}