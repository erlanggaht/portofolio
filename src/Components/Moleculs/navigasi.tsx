 import ghsotIcon from '../../assets/icons/ghost-halloween-horror-svgrepo-com.svg'
export default function Navigasi() {
  function RedirectCard () {
 

  }


  return (
    <>
    <nav className={'nav py-1 px-2 sm:flex sm:justify-around '}>
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header ">
    <div className="nav-title uppercase font-medium  dark:text-bg-base">
    <a href={'/'} className={'hover:opacity-80 flex items-center gap-1'}> <img src={ghsotIcon} className={'text-color-other-200 mb-1'} height={32} width={32} /> <span>Erlanggaht</span></a>
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check" >
      <span  className={'dark:bg-color-base-100 bg-color-base-200'}></span>
      <span  className={'dark:bg-color-base-100 bg-color-base-200'}></span>
      <span  className={'dark:bg-color-base-100 bg-color-base-200'}></span>
    </label>
  </div>
  
  <div className="nav-links dark:text-bg-base dark:bg-[#FDF9F9]">
    <a className={'dark:before:hover:bg-color-base-100'}  href="/#card1" onClick={() => RedirectCard()}>Github</a>
    <a className={'dark:before:hover:bg-color-base-100'} href="/#card2" onClick={() => RedirectCard()}>Links</a>
    <a className={'dark:before:hover:bg-color-base-100'} href="/#card3" onClick={() => RedirectCard()}>Projects</a>
    <a className={'dark:before:hover:bg-color-base-100'} href="/#card4" onClick={() => RedirectCard()}>Settings</a>
  </div>
</nav>
    </>
  )
}
