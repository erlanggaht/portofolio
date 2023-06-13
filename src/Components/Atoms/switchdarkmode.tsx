function ToggleLightMode () {
  const light = document.querySelector('html')!.classList.toggle('dark')
  const titleHIntro = document.querySelector('.titleHIntro')
  const TypographiTitle = document.querySelector('.TypographiTitle')
  const typewrap = document.querySelector('.type-wrap ')
  const descIntro = document.querySelector('.descIntro ')

  
  if(light) {
    document.querySelector('body')!.style.backgroundColor = "#fdf9f9"
    document.querySelector('body')!.style.color = "#181818"
    document.querySelector('body')!.style.transition = "ease-in-out .5s"
    titleHIntro?.setAttribute('style' , 'text-shadow:none')
    TypographiTitle?.setAttribute('style' , 'text-shadow:none')
    typewrap?.setAttribute('style' , 'text-shadow:none')
    descIntro?.setAttribute('style' , 'text-shadow:none')

    
 } else {
   document.querySelector('body')!.style.backgroundColor = "#181818"
   document.querySelector('body')!.style.color = "#fdf9f9"
   document.querySelector('body')!.style.transition = "ease-in-out .5s"
   titleHIntro?.removeAttribute('style')
   TypographiTitle?.removeAttribute('style')
   descIntro?.removeAttribute('style')
 }
 }

export default function Switchdarkmode() {
  

  return (
    <>
  <input type="checkbox" id="toggle_checkbox" onClick={() => ToggleLightMode()}/>
<label for="toggle_checkbox">
  <div id="star">
    <div class="star" id="star-2">★</div>
    <div class="star" id="star-1">★</div>
  </div>
  <div id="moon"></div>
</label>
    </>
  )
}
