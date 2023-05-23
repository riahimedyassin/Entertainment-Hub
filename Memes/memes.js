const fetchData= async() =>{
const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d6dfbdc58mshf41da34a8ef68fcp1f25bdjsn727ea33b3c79',
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
	
    result.map(el=>{
        displayData(el.image)
    })
} catch (error) {
	console.error(error);
}}
const displayData=(img) => {
	let myDiv=document.querySelector(".memes")
	let myHolder= document.createElement("div")
    myImg=document.createElement("img")
	let myAddToFav=document.createElement("button");
	myAddToFav.innerHTML='Add To Favorite';
	myAddToFav.setAttribute("onclick","addToLocalStorage(event)")
    myImg.setAttribute('src',img)
    myHolder.appendChild(myImg)
	myHolder.classList.add("memeContainer")
	myHolder.appendChild(myAddToFav)
    myDiv.appendChild(myHolder)
}
const loadSaved=() => {
	let myDiv=document.querySelector(".memes")
	myDiv.innerHTML=""
	let myMemesList=getLocalStorage();
	if(myMemesList.length>0) {
		myMemesList.map(el=> {
			displayData(el)
		})
	}
}
const initLocalStorage=() => {
	if(!localStorage.savedMemes) {
		localStorage.setItem("savedMemes",JSON.stringify([]));
	}
}
const getLocalStorage=() => {
	return JSON.parse(localStorage.savedMemes);
}
const addToLocalStorage=(event) => {
	let myImg=event.target.previousElementSibling.getAttribute("src")
	let myMemesList=getLocalStorage();
	myMemesList.push(myImg);
	localStorage.setItem("savedMemes",JSON.stringify(myMemesList));
}
window.onload=fetchData()
window.onload=initLocalStorage