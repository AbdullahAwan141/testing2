document.addEventListener('DOMContentLoaded', function() {
  
    createFloatingPetals();
    setupAmpersandButton();
});


function createFloatingPetals() {
    function createPetal() {
        const petal = document.createElement('img');
        petal.src = 'img/rose02.png';
        petal.className = 'petal';
        petal.style.width = '35px';
        petal.style.height = '35px';
        petal.style.opacity = '0.9';
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.top = '-20px';
        
        const rotation = Math.random() * 360;
        const duration = Math.random() * 3 + 4;
        const horizontalMovement = Math.random() * 100 - 50;
        
        petal.style.setProperty('--duration', `${duration}s`);
        document.querySelector('.petals-container').appendChild(petal);
        
        requestAnimationFrame(() => {
            petal.style.transform = `
                translate(${horizontalMovement}px, ${window.innerHeight + 50}px)
                rotate(${rotation + 720}deg)
            `;
            petal.style.opacity = '0';
        });
        
        setTimeout(() => petal.remove(), duration * 1000);
    }

    setInterval(createPetal, 300);
}

function setupAmpersandButton() {
    const ampersand = document.querySelector('.ampersand');
    
    ampersand.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('clicked');
        
        // Create celebration effect
        for(let i = 0; i < 30; i++) {
            setTimeout(() => {
                createCelebrationPetal();
            }, i * 50);
        }
        
        // Navigate to main.html after 1 second
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 1000);
    });
}

function createCelebrationPetal() {
    const petal = document.createElement('img');
    petal.src = 'img/rose02.png';
    petal.className = 'petal';
    petal.style.width = '25px';
    petal.style.height = '25px';
    petal.style.opacity = '0.8';
    
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    
    petal.style.left = `${startX}px`;
    petal.style.top = `${startY}px`;
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 300 + Math.random() * 200;
    const duration = 1;
    
    petal.style.setProperty('--duration', `${duration}s`);
    document.querySelector('.petals-container').appendChild(petal);
    
    requestAnimationFrame(() => {
        const targetX = startX + Math.cos(angle) * velocity;
        const targetY = startY + Math.sin(angle) * velocity;
        petal.style.transform = `
            translate(${targetX - startX}px, ${targetY - startY}px)
            rotate(${Math.random() * 720}deg)
        `;
        petal.style.opacity = '0';
    });
    
    setTimeout(() => petal.remove(), duration * 1000);
}

