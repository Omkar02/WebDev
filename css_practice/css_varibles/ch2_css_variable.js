const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')

console.log('length =' ,themeBtns.length, root)
themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate)
})
 
// console.log("hello World", themeBtns)
function handleThemeUpdate(e) {
    console.log('123', e)
  switch(e.target.value) {
    case 'dark': 
      root.style.setProperty('--bg', 'black')
      root.style.setProperty('--bg-text', 'white')
      break
    case 'calm': 
       root.style.setProperty('--bg', '#B3E5FC')
       root.style.setProperty('--bg-text', '#38474F')
      break
    case 'light':
      root.style.setProperty('--bg', 'white')
      root.style.setProperty('--bg-text', 'black')
      break
  }
}



