




let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}
function addNewWEField(){
    let newNode=document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("weField");
     newNode.classList.add("mt-3");
     newNode.setAttribute('rows',3);
     newNode.setAttribute("placeholder","Enter here....");
     let weOb=document.getElementById("we");
     let weAddButtonOb=document.getElementById("weAddButton");
     weOb.insertBefore(newNode,weAddButtonOb);
}
function deleteNewWEField(){
    console.log("delete textarea");
    let weOb=document.getElementById("we");
   let wefiels=weOb.getElementsByClassName("weField");
   if(wefiels.length>0){
    let lastwe=wefiels[wefiels.length-1];
    weOb.removeChild(lastwe);
   }
    else{
        console.log("No textarea to delete");
    }
}
function addachieve(){
    let achieve=document.getElementById("achieve");
    const achievecont=document.createElement("div");
    achievecont.classList.add("cols-2");
    const achievetitle=createachieve("Title","atitle");
    const achievedesc=createachieve("Description","adesc");
    achievecont.appendChild(achievetitle);
    achievecont.appendChild(achievedesc);
    const deleteachieve=document.createElement("button");
     deleteachieve.type="button";
     deleteachieve.classList.add("repeater-remove-btn");
     deleteachieve.textContent="-";
     deleteachieve.onclick=function(){deleteachievebtn(achievecont);};
     achievecont.appendChild(deleteachieve);
    achieve.insertBefore(achievecont,achieve.lastElementChild);
}
function createachieve(name,className){
    const achieveElem=document.createElement("div");
    achieveElem.classList.add("form-elem");
     const label=document.createElement("label");
     label.setAttribute("for",name);
     label.classList.add("form-label");
     label.textContent=name.charAt(0).toUpperCase()+name.slice(1);
    const input=document.createElement("input");
    input.type="text";
    input.name=name;
    input.classList.add("form-control",className);
    input.id=name;
    
    achieveElem.appendChild(label);
    achieveElem.appendChild(input);
    return achieveElem;
}
function deleteachievebtn(achievecont){
    const achieve=document.getElementById("achieve");
    achieve.removeChild(achievecont);
}
function addproject(){
    let proj=document.getElementById("proj");
    const projcontainer=document.createElement("div");
    projcontainer.classList.add("cols-3");
    const projname=createproject("Project Name","pname","Enter Project Name....");
    const projlink=createproject("Project Link","plink","Enter Project Link....");
    const projdesc=createproject("Description","pdesc","Enter Project Description....");
     projcontainer.appendChild(projname);
     projcontainer.appendChild(projlink);
     projcontainer.appendChild(projdesc);
     const deleteproject=document.createElement("button");
     deleteproject.type="button";
     deleteproject.classList.add("repeater-remove-btn");
     deleteproject.textContent="-";
     deleteproject.onclick=function(){deleteprojectbtn(projcontainer);};
     projcontainer.appendChild(deleteproject);
     proj.insertBefore(projcontainer,proj.lastElementChild);
   

}

function deleteprojectbtn(projcontainer){
    const proj=document.getElementById("proj");
    proj.removeChild(projcontainer);
}
function createproject(name,className,placeholder){
    const projElem=document.createElement("div");
   projElem.classList.add("form-elem");
    const label=document.createElement("label");
    label.setAttribute("for",name);
    label.classList.add("form-label");
    label.textContent=name.charAt(0).toUpperCase()+name.slice(1);
    const input=document.createElement("input");
    input.type="text";
    input.name=name;
    input.classList.add("form-control",className);
    input.id=name;
    input.setAttribute("placeholder",`${placeholder}`);
    projElem.appendChild(label);
    projElem.appendChild(input);
    return projElem;
}
function addeducation(){
   const educationrow=document.querySelector('.education-row').cloneNode(true);
   educationrow.querySelectorAll('input').forEach(input => input.value='');
 const existingrow=document.querySelector('.education-row');
    existingrow.parentNode.insertBefore(educationrow,existingrow.nextSibling);
}
function removeeducation(button){
    const educationrow=button.parentElement.parentElement;
    const educationrows=document.querySelectorAll('.education-row');
    if(educationrows.length>1){
        educationrow.parentNode.removeChild(educationrow);
    }
   
}
function addexperience(){
    const experiencerow=document.querySelector('.experience-row').cloneNode(true);
    experiencerow.querySelectorAll('input').forEach(input => input.value='');
  const existingrow=document.querySelector('.experience-row');
     existingrow.parentNode.insertBefore(experiencerow,existingrow.nextSibling);
 }
 function removexperience(button){
    const experiencerow=button.parentElement.parentElement;
    const experiencerows=document.querySelectorAll('.experience-row');
    if(experiencerows.length>1){
        experiencerow.parentNode.removeChild(experiencerow);
    }
   
}