import { comuni } from "./data.js";

const mostraComuni = document.getElementById("selectComune");
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const hum = document.querySelector('.hum');

mostraComuni.innerHTML = comuni.reduce((options, { value, name }) =>
  options += `<option value="${value}">${name}</option>`,
'<option value="" selected></option>');

mostraComuni.addEventListener('change', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + selectComune.value + '&units=metric&appid=4cecff0fa04c9feccea0622f6dce877e')
    .then(response => response.json())
    .then((data) => {
      const tempValue = data['main']['temp'];
      const nameValue = data['name'];
      const descValue = data['weather'][0]['description'];
      const humValue = data['main']['humidity'];

      main.innerHTML = nameValue;
      temp.innerHTML = parseInt(tempValue) + " °C";
      desc.innerHTML = descValue;
      hum.innerHTML = "humidity: " + humValue + " %";
    })
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
})