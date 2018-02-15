let img = document.getElementsByClassName('img')
let firstButton = document.getElementById('firstSliderButton')
let secButton = document.getElementById('secSliderButton')
let thirdButton = document.getElementById('thirdSliderButton')
let lButton = document.getElementById('leftslider')
let rButton = document.getElementById('rightslider')
let imgProduct = document.getElementsByClassName('imgProduct')
let product = document.getElementsByClassName('product')
let burgButt = document.getElementById('burgButt')
let burgMenu = document.getElementById('burgMenu')
let v = 0
let qLent = 0
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

  if (qLent >= 100) {
    qLent = -100
    for (var i = 0; i < img.length; i++) {
    img[i].style.transform = `translate(-100%)`
  }
  }
  else {
    qLent += (100)
  }
  console.log(qLent);
  })
rButton.addEventListener('click', () => {
  if (qLent <= -100) {
    qLent = 100
    for (var i = 0; i < img.length; i++) {
    img[i].style.transform = `translate(100%)`
  }
  }
  else {
    qLent -= (100)
  }
  console.log(qLent);
  })
rButton.addEventListener('mouseenter', () =>{
  rButton.setAttribute ('src', 'images/rArrowHover.png')
})
lButton.addEventListener('mouseenter', () =>{
  lButton.setAttribute ('src', 'images/lArrowHover.png')
})
rButton.addEventListener('mouseleave', () =>{
  rButton.setAttribute ('src', 'images/rArrow.png')
})
lButton.addEventListener('mouseleave', () =>{
  lButton.setAttribute ('src', 'images/lArrow.png')
})
firstButton.addEventListener('mouseenter', () =>{
  firstButton.setAttribute ('src', 'images/sliderButtonHover.png')
})
secButton.addEventListener('mouseenter', () =>{
  secButton.setAttribute ('src', 'images/sliderButtonHover.png')
})
thirdButton.addEventListener('mouseenter', () =>{
  thirdButton.setAttribute ('src', 'images/sliderButtonHover.png')
})
firstButton.addEventListener('mouseleave', () =>{
  firstButton.setAttribute ('src', 'images/sliderButton.png')
})
secButton.addEventListener('mouseleave', () =>{
  secButton.setAttribute ('src', 'images/sliderButton.png')
})
thirdButton.addEventListener('mouseleave', () =>{
  thirdButton.setAttribute ('src', 'images/sliderButton.png')
})
burgButt.addEventListener('click', () =>{
  if (v === 0) {
    burgMenu.style.visibility='visible'
    v = 1
    console.log(v);
  }
  else {
    burgMenu.style.visibility='hidden'
    v = 0
    console.log(v);
  }
})
