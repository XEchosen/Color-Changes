const containerEl = document.querySelector('.container');

for (let index = 0; index <30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
    
}

const colorContainerEls = document.querySelectorAll('.color-container');

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const randomColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + randomColorCode;
        colorContainerEl.innerText = "#" + randomColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodelength = 6;
    let color = "";
    for (let index = 0; index < colorCodelength; index++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomIndex, randomIndex + 1);    
    }
    return color;
}

// Call generateColors to initialize the colors
generateColors();