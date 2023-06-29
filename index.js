//si usamos axios en el navegador incluimos la biblioteca como se incluye en lps navegadores usando el CDN.
//const axios = require('axios'); //Y ESTA ´PARTE YA NO SE NECESITAya que incluimos el CDN Y NO SE NECESITA NINGUN ENPAQUETADOR COMO WEBPACK O PARCEL

let pokemon_name_input = document.getElementById("pokemon_name_input")
let container = document.getElementById("conteiner")
let container1 = document.getElementById("container1")
const show_pokemon_details = () =>{
    console.log(pokemon_name_input.value)
    get_pokemon_details(pokemon_name_input.value).then(pokemon =>{
        container.innerHTML += `<p class="field has-addons has-addons-centered">
    
        <img src= "${pokemon.sprites.other["official-artwork"].front_default}"

        </p>` //inspeccionamos el onjeto parA OBTENER LA IMAGEN DESDE LA API

        container1.innerHTML += `<ol> 
        <li> id: ${pokemon.id}</li>
        <li> nombre: ${pokemon.name}</li>
        <li> orden: ${pokemon.order}</li>
        <li> altura: ${pokemon.height}</li>
        <li> peso: ${pokemon.weight}</li>
        </ol>`
    })      .catch((error) => {
        console.log(error);
       });
    
}
const get_pokemon_details = (pokemon_name) => { //funcion que va a hacer la petición y va a solicitar los detalles de un pokemon en especifico
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`, //pokemon_name debe de ser parametro de una funcion
  headers: { }
};

return axios.request(config) //promesa
.then((response) => {
  console.log(response.data);
  return response.data
})

}