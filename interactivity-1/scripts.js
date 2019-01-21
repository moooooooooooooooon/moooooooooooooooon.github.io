// Interactivity demo 1

console.log("Testing that this works")

// Invert
var invertButton = document.querySelector("button")
var bodyClass = document.body.classList

invertButton.addEventListener("click", changeColor)

function changeColor() {
	console.log('Testing the color change')

	if ( bodyClass.contains('invert') ) {
		bodyClass.remove('invert')
	} 

	else {
		bodyClass.add('invert')
	}

}

// Greeting
var hand = document.querySelector('.waving-hand')
var Greeting = document.querySelector('.greeting')

hand.addEventListener('click', sayHello)

function sayHello() {
	Greeting.textContent = 'Hello Hello Hello.'
}	


// Fern
var toggle = document.querySelector('.toggle')
var content = document.querySelector('.content')

toggle.addEventListener('click', showHide)

function showHide() {
	content.id == 'show' ? content.id = '' : content.id = 'show'
}










