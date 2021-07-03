const { urlencoded } = require("express")

let button = document.querySelector('#button')
let name = document.querySelector('#name')
let model = document.querySelector('#model')
let manufacturer = document.querySelector('#manufacturer')
let cost_in_credits = document.querySelector('#cost_in_credits')
let length = document.querySelector('#length')
let max_atnosphering_speed = document.querySelector('#max_atnosphering_speed')
let crew = document.querySelector('#crew')

let passengers = document.querySelector('#passengers')
let cargo_capacity = document.querySelector('#cargo_capacity')
let consumables = document.querySelector('#consumables') 
let max_atnosphering_speed = document.querySelector('#max_atnosphering_speed')
let crew = document.querySelector('#crew')
let passengers = document.querySelector('#passengers')
let hyperdrive_rating = document.querySelector('#hyperdrive_rating')
let MGLT = document.querySelector('#MGLT')       
let starship_class = document.querySelector('#starship_class')
let pilots = document.querySelector('#pilots')
let films = document.querySelector('#films')
let created = document.querySelector('#created')
let edited = document.querySelector('#edited')
let urlencoded = document.querySelector('#urlencoded')       
    


function getData() {
    generateDataLoading()
    //let randomPlanet = Math.floor((Math.random() * 61) + 1)
   // let numberOfShips='9';
    let swApi = "https://swapi.co/api/starships/9/" 
    axios.get(swApi).then(response => {
        generateData(response.data)
    }).catch(e => {
        generateDataFail()
    })
}

function generateData(data) {
    name.innerText = data.name
    model.innerText = data.model
    manufacturer.innerText = data.manufacturer
    cost_in_credits.innerText = data.cost_in_credits
    length.innerText = data.length
    max_atnosphering_speed.innerText = data.max_atnosphering_speed
    crew.innerText = data.crew
    passengers.innerText = data.passengers
    cargo_capacity.innerText = data.cargo_capacity
    consumables.innerText = data.cost_in_credits
    hyperdrive_rating.innerText = data.hyperdrive_rating
    MGLT.innerText = data.MGLT
    starship_class.innerText = data.starship_class
    pilots.innerText = data.pilots
    films.innerText = data.films
    created.innerText = data.created
    edited.innerText = data.edited
    urlencoded.innerText = data.urlencoded

}

function generateDataFail() {
    name.innerText = 'R.I.P Api'
    
    model.innerText =''
    manufacturer.innerText = ''
    cost_in_credits.innerText = ''
    length.innerText = ''
    max_atnosphering_speed.innerText = ''
    crew.innerText = ''
    passengers.innerText = ''
    cargo_capacity.innerText = ''
    consumables.innerText = ''
    hyperdrive_rating.innerText = ''
    MGLT.innerText = ''
    starship_class.innerText = ''
    pilots.innerText = ''
    films.innerText = ''
    created.innerText =''
    edited.innerText = ''
    urlencoded.innerText = ''

function generateDataLoading() {
    name.innerHTML = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    model.innerText =''
    manufacturer.innerText = ''
    cost_in_credits.innerText = ''
    length.innerText = ''
    max_atnosphering_speed.innerText = ''
    crew.innerText = ''
    passengers.innerText = ''
    cargo_capacity.innerText = ''
    consumables.innerText = ''
    hyperdrive_rating.innerText = ''
    MGLT.innerText = ''
    starship_class.innerText = ''
    pilots.innerText = ''
    films.innerText = ''
    created.innerText =''
    edited.innerText = ''
    urlencoded.innerText = ''
}

button.addEventListener('click', getData)