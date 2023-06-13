import {  useEffect, useState } from 'react'
import CircleLineFlexRow from './Components/Moleculs/circleline'
import Navigasi from './Components/Moleculs/navigasi'
import Cards from './Components/Organism/cards'
import FooterComponent from './Components/Organism/footer'
import Intro from './Components/Organism/intro'
import Cards_props from './Utils/cards_props'
import { TitleTyped } from './Utils/typed'
import './app.css'
import LoadingPage from './Utils/Loading'
import Guestbook from './Components/Organism/guestbook'
import { GlobalContext } from './GlobalContext/globalcontext'
import GETDATA from './Lib/api'
// @ts-ignore
export function App()  {
  const [loginActive,setLoginActive] = useState<Boolean>(false) 
  const [loading,setLoading] = useState(false)
  const Getdata = GETDATA()
  const [data,setData] = useState()
  const { 
    data_cards1,
    data_cards2,
    data_cards3,
    data_cards4,
    data_cards5,data_cards6 } : any = Cards_props()
    
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(true)
      },0)
      Getdata.then((res) => setData(res))
    },[])
   
    
  return (
      // @ts-ignore
    <GlobalContext.Provider value={{data : data,loginActive : loginActive,setLoginActive }}>
      {/* @ts-ignore */}
    { !loading ? <LoadingPage/> :
<>
<TitleTyped/>
      <header className={`dark:text-bg-base `} data-aos={'fade-in'}>
        <Navigasi/>
        <Intro/> 
    
      </header>



        <section className={`mt-40`}>
          <CircleLineFlexRow/>
        </section>

      <main className={`ImageMain mt-40 px-0 sm:px-5 hover:cursor-text`} data-aos="fade-in">
      {/* Cards - Props data_cards  */}
      <div data-aos="fade-in">
      <Cards props={data_cards1}/> 
      </div>
      <div data-aos="fade-in">
      <Cards props={data_cards2}/> 
      </div>
      <div data-aos="fade-in">
      <Cards props={data_cards3}/> 
      </div>
      <div data-aos="fade-in">
      <Cards props={data_cards4}/> 
      </div>
      <div data-aos="fade-in">
      <Cards props={data_cards5}/> 
      </div>
      <div data-aos="fade-in">
      <Cards props={data_cards6}/> 
      </div>
      <div data-aos="fade-in">
      <Guestbook/> 
      </div>
      {/* Cards - Props data_cards  */}
      </main>

      <footer className={'mt-40 relative'} data-aos={'fade-up'}> 
        <FooterComponent/>
      </footer> </>
    }
    </GlobalContext.Provider>
  )
}
