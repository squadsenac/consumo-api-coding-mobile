const BASE_URL = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
const getBtn = document.getElementById("btn_facts");
const fact = document.getElementById("chuck");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '9b1a41cdc3msh8b176d04a1d2d61p17e5ecjsn7961ed37e41f',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  };

const getFacts= async () => {
    try{
        const data = await fetch(BASE_URL, options);
        const json = await data.json();
        
        return json.value;
    }catch(err){
        console.log(err.message);
    }
}

const loadFact = async () => {
    fact.innerHTML = await getFacts();
}