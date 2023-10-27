function onReady() { }
console.log('🟥 🟦 🟩 🟨');

let redCounter = 0;
let blueCounter = 0;
let greenCounter = 0;
let yellowCounter = 0;

// function deleteRedButton(event) {
//     console.log('You deleted a Red!', event.target);

//     event.target.remove();


// }

function onRedButton() {
    console.log('You clicked Red!');

    let redButton = document.getElementById('blocks');


    redButton.innerHTML += '<div onclick="deleteRedButton(event)"><div class="block red-fill"></div></div>';

    redCounter ++;
console.log(redCounter);
document.getElementById('red-count').textContent = redCounter


}

// function deleteBlueButton(event) {
//     console.log('You deleted a Blue!', event.target);

//     event.target.remove();


// }

function onBlueButton() {
    console.log('You clicked Blue!');

    let blueButton = document.getElementById('blocks');

    blueButton.innerHTML += '<div onclick="deleteBlueButton(event)"><div class="block blue-fill"></div></div>';

    blueCounter ++;
    console.log(blueCounter);
    document.getElementById('blue-count').textContent = blueCounter

}

// function deleteGreenButton(event) {
//     console.log('You deleted a Green!', event.target);

//     event.target.remove();


// }

function onGreenButton() {
    console.log('You clicked Green!');

    let greenButton = document.getElementById('blocks');

    greenButton.innerHTML += '<div onclick="deleteGreenButton(event)"><div class="block green-fill"></div></div>';
}

// function deleteYellowButton(event) {
//     console.log('You deleted a Yellow!', event.target);

//     event.target.remove();


// }

function onYellowButton() {
    console.log('You clicked Yellow!');

    let yellowButton = document.getElementById('blocks');

    yellowButton.innerHTML += '<div onclick="deleteYellowButton(event)"><div class="block yellow-fill"></div></div>';
}
onReady()




























