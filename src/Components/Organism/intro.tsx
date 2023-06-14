import { useState } from "react";
import { TypedReactHooksDemo } from "../../Utils/typed";
import Garis from "../Atoms/garis";
import SocialMe from "../Moleculs/socialme";

export default function Intro() {
  let engquote = 'fishing and football are not synonymous but both give color to life. chuaks.'
  let indquote= 'memancing dan sepak bola tidak identik tetapi keduanya memberi warna pada kehidupan. chuak.'
  const [quotes,setQuotes] = useState(true)
  function tranlsateQuote() {
    setQuotes(!quotes ||  false)
  }

  return (
    <>
          {/* Intro Components */}
          
          <div className={'intro  mx-auto  sm:flex w-[95vw] sm:flex-row-reverse sm:items-center lg:px-[185px] px-0 relative h-full mt-12 sm:mt-28'} >
          <div className={`bgImage w-1/2 h-full  before:absolute hover:cursor-text before:right-0 before:sm:right-40 before:w-full before:hover:bg-[0px_-20px] before:sm:w-[560px] before:bg-[0px_-20px]  before:sm:bg-[40px_center] before:hover:sm:bg-[50px_center]  before:top-0 `}/>

          <div className={`sm:h-[778px] h-[778px] max-w-[640px] flex flex-col justify-center `}>
          <h1 className={`titleHIntro text-5xl dark:text-bg-base  text-color-base-200 sm-[640px] dark:sm:w-[390px] w-full  leading-tight  z-50 font-bold sm:px-0 ml-6 sm:mx-0 pr-10 mt-10 dark:rotate-3 dark:sm:rotate-0 `}><span className={'dark:bg-color-base-200 dark:lg:bg-transparent dark:drop-shadow-xl'}>Hello, my name is Erlangga Hidayatullah</span></h1>
          <h1><TypedReactHooksDemo/></h1>
          <div className={`mt-16 mx-7 sm:mx-0 w-[100px]`}>
          <Garis />
          </div>
          <p className={`descIntro mx-7 sm:mx-0 sm:max-w-[460px] relative z-10  text-lg text-white drop-shadow-xl sm:text-color-base-100 leading-normal font-light tracking-wider mt-12 hover:text-white hover:cursor-text dark:hover:text-bg-base`}>I do web design, create databases and other technologies. Currently, I am a full-stack developer in a company in <br/>
          <span className={`text-color-other-200`}>Indonesia</span></p>
          
          {/* Sosial Components */}
          <div className={`SocialMe mt-12 flex gap-5 opacity-80 justify-end pr-3 sm:justify-start sm:pr-0  `}>
          <SocialMe/>
          </div>
          </div>
          <div className={'text-center absolute mt-2 sm:mt-0 sm:-bottom-7 sm:right-[125px] inline-block sm:w-[580px] cursor-pointer hover:opacity-80'} >
  <q className={'font-thin'} onClick={() => tranlsateQuote()}>{quotes ? engquote : indquote}</q>
      </div>
        </div>
        
    </>
  )
}
