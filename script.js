
// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.getElementById('captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";


let userText = document.getElementById('textBox');
let submitButton = document.getElementById('submitButton');
let output = document.getElementById('output');
let refreshButton = document.getElementById('refreshButton');

var captchaStr = "";


// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
                'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                'q', 'r', 's', 't', 'u', 'v', 'w', 
                'x', 'y', 'z', '0', '1', '2', '3', 
                '4', '5', '6', '7', '8', '9'];

function generate_captcha() {
    // This loop generates a random string of 7 characters using alphaNums
    // Further this string is displayed as a CAPTCHA
    let emptyArr = [];

    for (let i = 1; i <= 7; i++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }

    captchaStr = emptyArr.join('');

    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    ctx.fillText(captchaStr, captchaText.width/4, captchaText.height/2);

    output.innerHTML = "";
}

generate_captcha();

function check_captcha() {
    if (userText.value === captchaStr) {
        output.className='correctCaptcha';
        output.innerHTML = "Correct!";
    } else {
        output.className='incorrectCaptcha';
        output.innerHTML = "Incorrect, please try again!";
    }
}

// This event listener is stimulated whenever the user press the "Enter" button
// "Correct!" or "Incorrect, please try again!" message is
// displayed after validating the input text with CAPTCHA
userText.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        check_captcha();
    }
});

// This event listener is stimulated whenever the user clicks the "Submit" button
// "Correct!" or "Incorrect, please try again!" message is
// displayed after validating the input text with CAPTCHA
submitButton.addEventListener('click', check_captcha);

// This event listener is stimulated whenever the user press the "Refresh" button
// A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
refreshButton.addEventListener('click', generate_captcha);
