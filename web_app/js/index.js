import { comuni } from "./data.js";

const mostraComuni = document.getElementById('selectComune');

mostraComuni.innerHTML = comuni.reduce((options, {value,name}) => 
  options+=`<option value="${value}">${name}</option>`, 
'<option value="" selected></option>');