const temperaturespace = document.querySelector(".temp");
const locationspace = document.querySelector(".time_location p");
const dataspace = document.querySelector(".time_location span");
const weatherspace = document.querySelector(".condition p")
const searchspace = document.querySelector(".search_area");
const form = document.querySelector(".form");





let target = "Lucknow"

const fetchresults = async (targetlocation) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${targetlocation},us&units=imperial&appid=49cc8c821cd2aff9af04c9f98c36eb74`

const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${targetlocation},us&units=imperial&appid=49cc8c821cd2aff9af04c9f98c36eb74`)

const data = await res.json()

GetWeather.addEventListener("click", fetchresults,);
console.log(data)

let locationName = data.main.feels_like.humidity
let time = data.location
console.log(data)
}


fetchresults(target)