const apiKey="295c6eb934323cd507d5e1889f233c5c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".inputs input");
const searchBtn=document.querySelector(".inputs button");
const weatherIcon=document.querySelector(".Weather-icon")

async function checkweather(city)
{
	const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
	if(response.status==404){
		document.querySelector(".error").style.display="block";
		document.querySelector(".Weather").style.display="none";
	}
	else{
		var data=await response.json();
	console.log(data);
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
	if(data.weather[0].main=='Clouds')
	{
		weatherIcon.src="clouds.png";
	}
	else if(data.weather[0].main=='Clear')
	{
		weatherIcon.src="clear.png";
	}
	else if(data.weather[0].main=='Rain')
	{
		weatherIcon.src="rain.png";
	}
	else if(data.weather[0].main=='Mist')
	{
		weatherIcon.src="mist.png";
	}
	else if(data.weather[0].main=='Drizzle')
	{
		weatherIcon.src="drizzle.png";
	}
	document.querySelector(".Weather").style.display="block";
	}

	
}
searchBtn.addEventListener("click",()=>
{
	checkweather(searchBox.value);
});
checkweather();