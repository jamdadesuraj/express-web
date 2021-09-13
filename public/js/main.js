const submitBTN = document.getElementById("submitBTN");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");



const getin =(event)=>{
  event.preventDefault();
  let cityval = cityName.value;
  if(cityval===" "){
            city_name.innerText = `plz write the name before search`;
        }else{
            try{
                let url ="http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=ed2663ae8691c511f62d8c37d6882329";
    
                const res = await fetch (url);
              const jsdata = await res.json();
            }catch{
                city_name.innerText = `plz enter the city name propertly`;
            }
         
        }
}


submitBTN.addEventListener("click",getin);


