const fetchData=async()=>{
    let myHoroscope=document.getElementById("horoscope").value
    let myLangage=document.getElementById("langue").value
    console.log(myLangage)
    let myPeriod=document.getElementById("period").value
    const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${myHoroscope}/${myPeriod}/general/${myLangage}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8721eca7fbmsh82440975b0b4a1cp18e411jsn3d1bae606b60',
            'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
            }
    };
    if(myHoroscope!="none" && myLangage!="none" && myPeriod!="none") {
        try {
            let myDiv=document.querySelector("#horoscopeDiv")
            myDiv.innerHTML=""
            const response = await fetch(url, options);
            const result = await response.json();
            if(result.general) {
                result.general.map(el=> {
                    let myHolder=document.createElement("div");
                    myHolder.innerHTML=el;
                    myDiv.appendChild(myHolder)
                })   
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}