// TODO refactor this into a "panel" that is a div containing the h1 and buttons

function changeHeading(heading, newState) {
    switch (newState) {
        case "toAbout":
            heading.innerText = "ABOUT"
            break;

        case "toForm":
            heading.innerText = "FORM BEGINS!"
            break;
        default:
            console.log("cannot change state of heading, " + newState + " not recognized")
            break;
    }
}