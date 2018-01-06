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

//creates the new li element with the value as the innertext and resets the input
document.getElementById("addbutt").addEventListener("click", function addNewLabel(e){
    let val = addNew.value
    console.log(val)
    if (!val){alert("Please Enter a Value")} 
    else { 
        createLi(val)
        document.getElementById("add").value = "";
    }
});

// create label and the other elements attached to it
const  createLi = (text) =>{
    let ul = document.getElementById('lcol');
    let li = document.createElement('label');
    li.classList.add('ldisc')
    li.innerText=text;

    let span = document.createElement('span')
    span.classList.add('checkmark')

    let i= document.createElement('i')
    let  iClass = document.createAttribute("class");
    let  iaria = document.createAttribute("aria-hidden");
    let  istyle = document.createAttribute("style");
    iClass.value = "fa fa-trash-o";
    iaria.value = "true";
    istyle.value = "visibility: hidden;";
    i.setAttributeNode(iClass);
    i.setAttributeNode(iaria);
    i.setAttributeNode(istyle);
    span.appendChild(i)
    li.appendChild(span);

    ul.insertAdjacentElement("beforeend", li);
    i.parentElement.parentElement.addEventListener('mouseover' , function(){       
        i.style.visibility="visible";
    });
    i.parentElement.parentElement.addEventListener('mouseout' , function(){       
        i.style.visibility="hidden";
    });
    i.addEventListener('click' , function(){       
        li.remove();
    });
}

/*
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




