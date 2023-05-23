const getGenre=async()=>{
const url = 'https://animes5.p.rapidapi.com/?fields=genres';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d6dfbdc58mshf41da34a8ef68fcp1f25bdjsn727ea33b3c79',
		'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const result = await response.json();
    let liste = result.animes[6];
	let mySelect= document.querySelector("#genres")
    liste.genres.map(item=>{
       let myOption= document.createElement("option")
       myOption.innerHTML=item
	   myOption.setAttribute("value",item)
       mySelect.appendChild(myOption) 
    })

} catch (error) {
	console.error(error);
}}

const fetchData=async()=>{
    let movieGenre=document.querySelector("#genres").value 
    const url = `https://animes5.p.rapidapi.com/?genre=${movieGenre}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d6dfbdc58mshf41da34a8ef68fcp1f25bdjsn727ea33b3c79',
            'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
        }
    };

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const renderRes=document.querySelector("#movies");
    const myGenre=document.querySelector("#genreTitle");
    myGenre.innerHTML=movieGenre
    renderRes.innerHTML=""
    let data= result.animes
    data.map(item=>{
       let movieTitle=item.title
       let movieImg=item.main_picture.large
       let myTitle=document.createElement("h1")
       myTitle.innerHTML=movieTitle;
       let myHolder=document.createElement("div");
       let myBonde=document.createElement("div");
       myBonde.classList.add("bonde");
       myBonde.appendChild(myTitle)
       myHolder.classList.add("movieContainer");
       myHolder.style.backgroundImage=`url(${movieImg})`
       myHolder.appendChild(myBonde)
       renderRes.appendChild(myHolder) 
    })
} catch (error) {
	console.error(error);
}}
// }



window.onload=getGenre()
window.onload=fetchData()