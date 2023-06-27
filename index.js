//si usamos axios en el navegador incluimos la biblioteca como se incluye en lps navegadores usando el CDN.
//const axios = require('axios'); //Y ESTA ´PARTE YA NO SE NECESITAya que incluimos el CDN Y NO SE NECESITA NINGUN ENPAQUETADOR COMO WEBPACK O PARCEL

let pokemon_name_input = document.getElementById("pokemon_name_input")
let container = document.getElementById("conteiner")
const show_pokemon_details = () =>{
    console.log(pokemon_name_input.value)
    get_pokemon_details(pokemon_name_input.value).then(pokemon =>{
        container.innerHTML = `<p class="field has-addons has-addons-centered">
        <span> id: ${pokemon.id}</span>
        <span> nombre: ${pokemon.name}</span> 
        <span> orden: ${pokemon.order}</span>
        <span> altura: ${pokemon.height}</span>   
        <span> peso: ${pokemon.weight}</span>
        <img src= "${pokemon.sprites.other["official-artwork"].front_default}" /></p>` //inspeccionamos el onjeto parA OBTENER LA IMAGEN DESDE LA API
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