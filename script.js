const counters = document.querySelectorAll('.counter');
const speed = 200; // වේගය වෙනස් කිරීමට මෙය වෙනස් කරන්න

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // ඉලක්කම් වැඩි වන වේගය තීරණය කිරීම
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20); // මිලි තත්පර 20 කට වරක් යාවත්කාලීන වේ
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

function toggleChat() {
    const chatWin = document.getElementById('chat-window');
    chatWin.classList.toggle('hidden');
}

// Mobile Menu Toggle Logic
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});