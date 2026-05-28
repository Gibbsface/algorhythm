
// register all elements in the DOM
var title = document.getElementsByTagName("h1")[0]
var btnToAbout = document.getElementById("view-to-about")
var btnToForm = document.getElementById("view-to-form")

// register event listeners on buttons
btnToAbout.addEventListener("click", viewToAbout)
btnToForm.addEventListener("click", viewToForm)


function viewToAbout() {
    console.log("to about!")
    title.innerText = "ABOUT"
    btnToAbout.style.display = "none"
}

function viewToForm() {
    console.log("to form!")
    title.innerText = "FORM BEGINS!"
    btnToAbout.style.display = "none"
    btnToForm.style.display = "none"
}
