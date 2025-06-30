const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let hasPassword = false
let changePassword = true

function showPassword() {
    if (hasPassword === false && changePassword === true) {
        generatePassword()
        hasPassword = true
    } else if (hasPassword === true && changePassword === true) {
        passwordOne.textContent = " "
        passwordTwo.textContent = " "
        generatePassword()
        hasPassword = true
    }
}

function generatePassword() {
    for (let i=0; i<15; i++) {
        indexChars = Math.floor( Math.random() * allChars.length )
        passwordOne.textContent += ( allChars[indexChars] )
        indexChars = Math.floor( Math.random() * allChars.length )
        passwordTwo.textContent += ( allChars[indexChars] )
        hasPassword = true
    }
}
