// récuperation des variables
let img = document.getElementById('img')
let firstButton = document.getElementById('firstSliderButton')
let secButton = document.getElementById('secSliderButton')
let thirdButton = document.getElementById('thirdSliderButton')
// On change l'attribut du lien de l'image, c'est plus simple
firstButton.addEventListener('click', () => {
  console.log('triggerd');
      img.setAttribute('src', './img/1.jpg')
    })

secButton.addEventListener('click', () => {
    console.log('triggerd');
      img.setAttribute('src', './img/2.jpg')
    })
thirdButton.addEventListener('click', () => {
  console.log('triggerd');
      img.setAttribute('src', './img/3.jpg')
    })
// mtn il faut trouver un moyen de faire une animation
