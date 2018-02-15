let burgButt = document.getElementById('burgButt')
let burgMenu = document.getElementById('burgMenu')
let v = 0
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
