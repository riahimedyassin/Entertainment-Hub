const addInfo=()=>{
    let myDate
    do { 
        myDate=Number(prompt("donner la date de la nouvelle experience"))
    } while (myDate<1970 || myDate>2024 || isNaN(myDate))
    let myTitle=prompt("donner le titre de la nouvelle exp")
    let myP1 =document.createElement("p")
    myP1.innerHTML=`<strong>${myDate}</strong><br> ${myTitle}`
    do{
        myText=prompt("donner la description de l'experience (ecrice done quand tu termines)")
        if (myText==="done"){
            myText="cbn"
        }
        else {
            myP1.innerHTML=`${myP1.innerHTML} <ul> <li style="list-style-type:circle">${myText}</li>`
        }
    }while(myText != "cbn")
    myP1.innerHTML=`${myP1.innerHTML} </ul>`
    let myDiv= document.createElement("div")
    myDiv.appendChild(myP1)
    document.querySelector("#parent").appendChild(myDiv)
}
const changeInfo=(original,target)=> {
    let myText=document.querySelector(`#${original}`);
    document.querySelector(`#${target}`).value=myText.innerText;
}
const saveInfo=(text,target) => {
    let myTarget=document.querySelector(`#${target}`);
    console.log(text)
    myTarget.innerHTML=text;
}
const TogglePopUp=() => {
    document.querySelector(".popUpContainer").classList.toggle("show");
}
const getInfo=() => {
    TogglePopUp()
    changeInfo("info1","aPropos1")
    changeInfo("info2","aPropos2")
}
const setInfo=() => {
    saveInfo(document.querySelector("#aPropos1").value,"info1")
    saveInfo(document.querySelector("#aPropos2").value,"info2")
    
    TogglePopUp()
}
const pictureInput = document.getElementById('pictureInput');
pictureInput.addEventListener('change', () => {
  const file = pictureInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const pictureUrl = reader.result;
    let myPicture=document.querySelector("#imgC")
    myPicture.src = pictureUrl;
  };
  reader.readAsDataURL(file);
});
