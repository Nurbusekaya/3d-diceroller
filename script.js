const dice = document.getElementById('dice');
const roll = document.getElementById('roll-btn');

roll.addEventListener('click', () => {
    const randomResult = Math.floor(Math.random() * 6) + 1;
    
    const TurnsX = Math.floor(Math.random() * 5 + 5) * 360; 
    const TurnsY = Math.floor(Math.random() * 5 + 5) * 360; 

    let xRotation = 0;
    let yRotation = 0;

    switch (randomResult) {
        case 1:
            xRotation = 0; yRotation = 0;
            break;
        case 6:
            xRotation = 0; yRotation = 180;
            break;
        case 3:
            xRotation = 0; yRotation = -90;
            break;
        case 4:
            xRotation = 0; yRotation = 90;
            break;
        case 2:
            xRotation = -90; yRotation = 0;
            break;
        case 5:
            xRotation = 90; yRotation = 0;
            break;
    }
    
    dice.style.transform = `rotateX(${xRotation + TurnsX}deg) rotateY(${yRotation + TurnsY}deg)`;
});