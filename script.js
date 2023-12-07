

document.addEventListener('DOMContentLoaded', function() {

    var onButton = document.getElementById('onButton');
    var offButton = document.getElementById('offButton');
    var reverseButton = document.getElementById('reverseButton');
    var speedSlider = document.getElementById('speedSlider');
    var speedValueDisplay = document.getElementById('speedValue');
    var motorImage = document.getElementById('motorImage');
    var greenLight = document.getElementById('greenLight');
    var redLight = document.getElementById('redLight');
    var blueLight = document.getElementById('blueLight');
    var motorState = document.getElementById('motorState');

    greenLight.style.display = 'none';
    redLight.style.display = 'inline-block';
    blueLight.style.display = 'none';
    motorState.textContent = 'Išjungtas';
    speedValueDisplay.textContent = 0;

    //neveikia su gif :(
        
    function updateAnimationSpeed() {
        var speed = speedSlider.value / 10; 
        motorImage.style.animationDuration = speed + 's';
    }


    onButton.addEventListener('click', function() {
        console.log('On button clicked');
        motorImage.src = 'assets/spinningmotor.gif';
        greenLight.style.display = 'inline-block';
        redLight.style.display = 'none';
        blueLight.style.display = 'none';
        motorState.textContent = 'Įjungtas';
        speedSlider.value = 100;
        speedValueDisplay.textContent = speedSlider.value;
        updateAnimationSpeed();
        // funkcija kuri ijungia motora
    });

    offButton.addEventListener('click', function() {
        console.log('Off button clicked');
        motorImage.src = 'assets/motor.png';
        greenLight.style.display = 'none';
        redLight.style.display = 'inline-block';
        blueLight.style.display = 'none';
        motorState.textContent = 'Išjungtas';
        speedSlider.value = 0;
        speedValueDisplay.textContent = speedSlider.value;
        updateAnimationSpeed();
        // funkcija kuri isungia motora
    });

    reverseButton.addEventListener('click', function() {
        console.log('Reverse button clicked');
        motorImage.src = 'assets/reversedmotor.gif';
        greenLight.style.display = 'none';
        redLight.style.display = 'none';
        blueLight.style.display = 'inline-block';
        motorState.textContent = 'Įjungtas, reversas';
        speedSlider.value = 100;
        speedValueDisplay.textContent = speedSlider.value;
        updateAnimationSpeed();
        // funkcija kuri isjungia motora, ijungia rele, ir ijungia motora
    });

    speedSlider.addEventListener('input', function() {
        var speedValue = speedSlider.value;
        console.log('Speed slider value:', speedValue);
        speedValueDisplay.textContent = speedValue;
        updateAnimationSpeed();
        // funkcija kuri keicia motoro greiti
    });
});
