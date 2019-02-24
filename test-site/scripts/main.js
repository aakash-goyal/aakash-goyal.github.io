var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/tree-human.jpg') {
        myImage.setAttribute('src' , 'images/tree.jpg');
    }
    else{
        myImage.setAttribute('src' , 'images/tree-human.jpg');
    }
}

var myHead = document.querySelector('h1');
var mybutton = document.querySelector('button');

function setUsername(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHead.textContent = 'Save Environment ' + myName;
}

if(!localStorage.getItem('name')){
    setUsername();
}
else {
    var storedName = localStorage.getItem('name');
    myHead.textContent = 'Save Environment ' + storedName;
}

mybutton.onclick = setUsername;