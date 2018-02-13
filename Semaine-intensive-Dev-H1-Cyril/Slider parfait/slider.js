// récuperation des variables
let img = document.getElementsByClassName('img')
let firstButton = document.getElementById('firstSliderButton')
let secButton = document.getElementById('secSliderButton')
let thirdButton = document.getElementById('thirdSliderButton')
let lButton = document.getElementById('leftslider')
let rButton = document.getElementById('rightslider')
let qLent = 100
for (let i = 0; i < img.length; i++) {
  firstButton.addEventListener('click', () => {
    qLent = 100
    img[i].style.transform = `translate(${qLent}%)`
  })

  secButton.addEventListener('click', () => {
    qLent = -100
    img[i].style.transform = `translate(${qLent}%)`
  })

  thirdButton.addEventListener('click', () => {
    qLent = 0
    img[i].style.transform = `translate(${qLent}%)`
  })
  lButton.addEventListener('click', () => {
    if (qLent<100) {

    img[i].style.transform = `translate(${qLent+100}%)`
  }
  })
  rButton.addEventListener('click', () => {
    if (qLent>-100) {
    img[i].style.transform = `translate(${qLent-100}%)`
  }
  })
}
lButton.addEventListener('click', () => {
  qLent += (100)
  if (qLent >= 100) {
    qLent = 100
  }
  console.log(qLent);
  })
rButton.addEventListener('click', () => {
  qLent -= (100)
  if (qLent <= -100) {
    qLent = -100
  }
  console.log(qLent);
  })
