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
// Use options object as key variable in top-level.
function draw({key}){
    context.beginPath();
    context.moveTo(x,y);

    switch (key){
        case 'ArrowUp' : 
        y = y - 10;
        break;

        case 'ArrowDown' : 
        y = y + 10;
        break;

        case 'ArrowRight' : 
        x = x + 10;
        break;

        case 'ArrowLeft' : 
        x = x - 10;
        break;
        // switch statement needs default
        default: 
        break;
    }

    // if (key == 'ArrowUp'){
    //     y = y - 10;
    // } else if (key == 'ArrowDown'){
    //     x = x - 10;
    // };
    context.lineTo(x,y);
    context.stroke();
}

function handleKey(e){
    // Look for ArrowUp or ArrowDown
    if (e.key.includes('Arrow')){
        e.preventDefault();
        console.log('Handling key');
        console.log(e.key);
        // Use Objects from the options in Line 26.
        draw({key: e.key});
    }
}

function clearCanvas(){
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function(){
        navigator.vibrate(100);
        console.log('Done the shake');
        canvas.classList.remove('shake');
    },
    // Another argument for addeventlistener
    {  once: true } 
    );
    
    context.clearRect(0,0, width, height);
}

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);