let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/christmas-bg.jpg') {
      myImage.setAttribute ('src','images/christmas-meal.jpg');
    } else {
      myImage.setAttribute ('src','images/christmas-bg.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('여보를 어떻게 불러줬으면 좋겠나요? (고양이, 냥냥이, 애기, 유선)');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '곰탱이와 ' + myName + '의<br>행복한 크리스마스🎄';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = '곰탱이와 ' + storedName + '의<br>행복한 크리스마스🎄';
}

myButton.onclick = function() {
    setUserName();
}