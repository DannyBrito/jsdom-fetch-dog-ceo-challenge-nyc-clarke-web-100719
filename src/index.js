console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgcontainer = document.querySelector("#dog-image-container");
const ul = document.querySelector('#dog-breeds');
let breeds;
const dropdown = document.getElementById("breed-dropdown")

fetch(imgUrl)
.then(response => response.json())
.then(function(json){
    json.message.forEach(element => {
      imgcontainer.innerHTML += `<div><img style="height: 100px; width: 100px"src="${element}"></div>`
    });
});

fetch(breedUrl)
.then(response => response.json())
.then(function(json){
  breeds = Object.keys(json.message)
    breeds.forEach(breed => { ul.innerHTML += `<li data-breed="${breed}">${breed}</li>`})
});

ul.addEventListener('click',function(event){
  if(event.target.localName === 'li'){
    event.target.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
  }
})

dropdown.addEventListener("change",event =>{
  sortbyletter(event.target.value);
})

function sortbyletter(letter){
  ul.innerHTML = "";
  let sortBreeds = breeds.filter(breed => breed.startsWith(letter))
  sortBreeds.forEach(breed => { ul.innerHTML += `<li data-breed="${breed}">${breed}</li>`})
}