const canvas = document.getElementById('etch-a-sketch');
const context = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Use 'destructuring' by making variables from a property on an object
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas;

// Generate random starting points using canvas w and h
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

// Start the first drawing dot
context.beginPath();
context.moveTo(x,y);
context.lineTo(x,y);
context.stroke();

// Use object destructuring to take properties and rename them into propert variables so they are shorter
function draw({key}){
    context.beginPath();
    context.moveTo(x,y);

    if (key === 'ArrowDown'){
        y = y - 10;
    } else if (key === 'ArrowDown'){
        x = x - 10;
    };
    context.lineTo(x,y);
    context.stroke();
}

function handleKey(e){
    // Look for ArrowUp or ArrowDown
    if (e.key.includes('Arrow')){
        e.preventDefault();
        console.log('Handling key');
        console.log(e.key);
        draw({key: e.keys});
    }
}

window.addEventListener('keydown', handleKey)