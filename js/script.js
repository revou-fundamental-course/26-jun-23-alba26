const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    const firstNameValue = firstNameInput.value
    const lastNameValue = lastNameInput.value
    nameValidation(firstNameValue, lastNameValue)
})

function nameValidation(fname, lname) {
    if (fname == "" || lname == "") {
        alert("First Name / Last Name empty")
    } else {
        updateUI(fname, lname)
    }
}

function updateUI(fname, lname) {
    const firstNameOutput = document.getElementById("firstNameOutput");
    const lastNameOutput = document.getElementById("lastNameOutput");
    firstNameOutput.textContent = fname
    lastNameOutput.textContent = lname
}
var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 1500)
function plusDiv(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) { slideIndex = 1}
    if (index < 1) { slideIndex = imgList.length }
    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}

// TESTING FOR GIT PULL REQUEST