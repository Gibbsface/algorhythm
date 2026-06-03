
// TODO idk how to organize this lol
// seems like I'm going to have 20+ elements floating around, with a ton of states
// I need to group these elements. Their "bones" and initial style will be in html and css. But state changes need to be handled here
// Each change of state for each element is a function. That's like a billion functions :( 

//ok so I can reduce the number of elements. Elements can be grouped together if they share state changes.
// I need to figure out how to consolidate these state changes into more abstract things.

// 1) html loads
// 2) each "components" will be a group of elements that share state. If they are just function decs, then
//      it's okay for them to load at any time. so probably "function changeState(elem, newState)" and 
//      then a switch statement inside for each possible "newState"
// 3) app.js runs on load and queries everything into memory and hooks up event listeners

// query everything into memory
const buttonToAbout = document.getElementById("toAbout")
const buttonToApp = document.getElementById("toApp")
const heading = document.getElementsByTagName("h1")[0]
const aboutBlurb = document.getElementsByTagName("p")[0]

// button toAbout
buttonToAbout.addEventListener("click", () => {
    console.log("to about!")

    heading.innerText = "About Heading"
    buttonToAbout.style.display = "none"
    aboutBlurb.style.display = "block"
})

// button toForm
document.getElementById("toApp").addEventListener("click", () => {
    console.log("to form!")

    //how do I load a new page?
})




