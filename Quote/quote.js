const quotee = async()=>{
    const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d6dfbdc58mshf41da34a8ef68fcp1f25bdjsn727ea33b3c79',
		'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const myRender=document.querySelector("#quoteRender")
        myRender.innerHTML=result.text
    } catch (error) {
        console.error(error);
    }
}