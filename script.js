/*
1. Create a list of letter
1.1 Associate a letter with a color code

2. Create an input field
3. Add event handler to capture what you type
3.1 Console log what you write

*/

/*

function on(eventName, callback){
    textInput.addEventListener(eventName, callback);
}


on('keyup', function(event){
    
  var colorCube = document.createElement('span');
  colorCube.style.backgroundColor = letters[event.key];
  document.getElementById('colored-text').appendChild(colorCube);
  console.log(colorCube);

    
});

*/

var input = document.getElementById('inputField');
var convertButton = document.getElementById('btn-convert');
var output = document.getElementById('colored-text');
var saveButton = document.getElementById('btn-save-colors');


var letters = []
letters['a'] = '#806e46';
letters['b'] = '#578c7a';
letters['c'] = '#ab523e';
letters['d'] = '#d7dbb8';
letters['e'] = '#e3614d';
letters['f'] = '#4dc2e3';
letters['g'] = '#329465';
letters['h'] = '#b59f0e';
letters['i'] = '#bdb99f';
letters['j'] = '#bcd2d6';
letters['k'] = '#7a4b05';
letters['l'] = '#8a6803';
letters['m'] = '#096931';
letters['n'] = '#24074f';
letters['o'] = '#dbdbab';
letters['p'] = '#442775';
letters['q'] = '#806b3b';
letters['r'] = '#486f94';
letters['s'] = '#d61f0b';
letters['t'] = '#703a07';
letters['u'] = '#dae3aa';
letters['v'] = '#140b03';
letters['w'] = '#262422';
letters['x'] = '#7a1d0a';
letters['y'] = '#59201a';
letters['z'] = '#141212';
letters[' '] = 'white';


saveButton.addEventListener('click', updateColors);

function updateColors() {
  console.log("Inside SAVE button function")
  letters = [];
  letters.forEach(function(element) {
    console.log("Inside forEach??");
    letters[element]
    letters[element] = document.getElementById(element).value;

  });

}


convertButton.addEventListener('click', convertText);

function convertText() {
  var inputArray = Array.from(input.value.toLowerCase());
  output.innerHTML = '';
  inputArray.forEach(function(element) {
    var colorCube = document.createElement('span');
    colorCube.style.backgroundColor = letters[element];
    output.appendChild(colorCube);
  });
}


