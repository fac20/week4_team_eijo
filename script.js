const addTemplate = () => {
    let template = document.getElementById("balloon-temp"); // select the template element
    let fragment = template.content.cloneNode(true); //get read-only documentFragment from the template, and clone it to put it into the fragment variable
    let balloonTemplate = fragment.querySelector(".svg-container"); //select list item from the
    console.log(balloonTemplate)
    //balloonTemplate.childNodes[2].textContent = balloonTemplate.value;
    let section = document.querySelector("section"); // select the unordered list in the relevant section related to the time argument
    section.appendChild(fragment); //add the new list item to the section
  };

// document.onload = addTemplate()
// document.onload = addTemplate()
// document.onload = addTemplate()

const submitBtn = document.getElementById("sendForm");

// submitBtn.addEventListener("click", e => {
//  e.preventDefault();
//})

// Deleting the balloon

let bin = document.querySelector("#img__bin");
    bin.addEventListener("click", () => {
        event.target.parentNode.parentNode.remove()
                })
    