const GetWeather = document.querySelector("#GetWeather");
const weathercard = document.querySelector("#weatherCards");
GetWeather.addEventListener("click", weatherRepo,);





 


    
async function weatherRepo() { 
const searchbox = document.querySelector("#searchbox")
  const weatherresults = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbox},us&units=imperial&appid=115c8cbce3f74d7aa593612a25ca3364`,

{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );
const json = await weatherresults.json()
const weathers = document.createElement("div");
const main = document.createElement("h6");
const timezone = document.createElement("p");
timezone.innerText = json.timezone;
const feelike = document.createElement("p")
feelike.innerText=`Feels Like ${json.main.feels_like}`
const weather = document.createElement("p")
weather.innerText= json.main.description;

weathers.classList.add("card");
main.innerText = json.main.temp;



weathers.append(main, feelike,timezone,);
weathercard.append(weathers,)
}


  
  








