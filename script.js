// script.js

// tempo de espera pra página abrir
window.addEventListener('load', () => {
    // deley do confete e da vela
    setTimeout(() => {
        startConfetti();
    }, 5000); // ajuste da da animação 
});

function startConfetti() {
    const container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
    `;
    document.body.appendChild(container);

    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#a4ffc4', '#ffffff'];

    // fazendo os confetes aparecerem
    for (let i = 0; i < 200; i++) {
        const dot = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 5; // gatilho de inicar
        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -20px;
            left: ${Math.random() * 100}vw;
            border-radius: 50%;
            opacity: ${Math.random()};
            transform: translateY(0) rotate(${Math.random() * 360}deg);
            animation: confettiFall ${Math.random() * 3 + 3}s linear ${delay}s infinite;
        `;
        container.appendChild(dot);
    }

    // add css para dar a sensação de queda dos confetes
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}


const music = document.getElementById("bg-music");

// toca na primeira interação do usuário 
document.addEventListener("click", () => {
    music.play();
}, { once: true });