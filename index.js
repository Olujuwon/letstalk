const images = document.querySelectorAll("i")
const labels = document.getElementsByClassName("ldisc")
const addNew = document.getElementById("add")
const addButt = document.getElementById("addbutt")
const div = document.getElementById("lcol")
const div2 = document.getElementById("divaddbutt")
const myForm = document.forms
let labelArray = Array.from(labels);
let tagArray = Array.from(images);
let d = addNew.value;
//display the delete icon on mouseover and hide the icon on mouseout
tagArray.forEach(tag => {
    tag.parentElement.parentElement.addEventListener('mouseover' , function(){       
        tag.style.visibility="visible";
    });
    tag.parentElement.parentElement.addEventListener('mouseout' , function(){       
        tag.style.visibility="hidden";
    });
})
//deletes an entry whenever the delete icon is clicked
labelArray.forEach(lab => {
    lab.addEventListener('click' , function(){       
        lab.remove();
    });
})
// create label

const createLabelAtt= () => {
    let labAtt = document.createElement("Label");
    let  att = document.createAttribute("class");
    att.value = "ldisc";
    labAtt.setAttributeNode(att);
    return labAtt;
}
// create input
const createInputAtt= () => {
    let inAtt = document.createElement("Input");
    let  inType = document.createAttribute("type");
    inType.value = "checkbox";
    inAtt.setAttributeNode(inType);
    return inAtt
}
// create span
const createSpanAtt= () => {
    let spanAtt = document.createElement("Span");
    let  spanClass = document.createAttribute("class");
    spanClass.value = "checkmark";
    spanAtt.setAttributeNode(spanClass);
    return spanAtt
}
// create image
const createImageAtt= () => {
    let inAtt = document.createElement("i");
    let  iClass = document.createAttribute("class");
    let  iaria = document.createAttribute("aria-hidden");
    let  istyle = document.createAttribute("style");
    iClass.value = "fa fa-trash-o";
    iaria.value = "true";
    istyle.value = "visibility: hidden;";
    inAtt.setAttributeNode(iClass);
    inAtt.setAttributeNode(iaria);
    inAtt.setAttributeNode(istyle);
    return inAtt
}
//append everything
let newLabel = createLabelAtt();
let newInput = createInputAtt();
let newSpan = createSpanAtt();
let newI = createImageAtt();

const addSecondElement = newLabel.appendChild(newInput)
const addThirdElement = newLabel.appendChild(newSpan)
const addFourthElement = newSpan.appendChild(newI)
console.log('new Label', myForm);

//addNew.addEventListener("mouseover", (e)=> console.log('value of inputfield',  newLabel.innerText = addNew.value));
addButt.addEventListener("click",  function newAppend(){
    console.log(newLabel)
    newLabel.prepend(addNew.value)
    //div.append(newLabel.innerText=addNew.value );
    div.insertAdjacentElement("beforeend", newLabel)
});




//let addNewLabel = newLabel => 
//addNew.addEventListener('onclick', )
/*
let addNew = x => labelArray.insertbefore(x);

document.getElementById("addbutt").addEventListener("click", addNew(newLab));
Regular Expressions

var str = "https://";
var patt = /^((\+?|00)\d{1,3}|0?)-?\d{3}-?\d{3}-?\d{3}| {4}$/
let pattName = /^([a-z]{2,}\s[a-z]{2,})$/i
let pattCountry = /^([a-z]{2,})$/i
let pattCity = /^([a-z]{2,})$/i
let pattZip = /^([0-9a-z]{5})$/i
let pattFolio = /(https?:\/\/)/
var result = pattFolio.test(str);
result;*/




