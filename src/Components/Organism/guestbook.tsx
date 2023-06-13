import { useContext, useEffect } from "react"
import { GlobalContext } from "../../GlobalContext/globalcontext"
import Textcroocked from "../Atoms/textcroocked"
import { TargetedEvent } from "preact/compat"
import { ErrorServer } from "../../Utils/typed"
import axios from "axios"


export const LoginGuest = (e :TargetedEvent,loginActive : any,setLoginActive : any) => {
    e.preventDefault()
    var loginTrue : boolean   | string = loginActive === true || "true" 
    var loginFalse : boolean | string  = loginActive === false &&  'false'
    
    console.log(loginTrue,loginFalse)
    if(typeof window !== 'undefined') {
        setLoginActive(true)
        // @ts-ignore
        sessionStorage.setItem('login',loginActive ? loginTrue : loginFalse)
    }

}


export const SubmitComment = (e : TargetedEvent) => {
    e.preventDefault()
    
}


export default function Guestbook() {
    const {data,setLoginActive}:any  = useContext(GlobalContext)
    const getLoginStorage = sessionStorage.getItem('login')
    
    useEffect(()=>{
        async function as() {
            await axios("https://guestbook-mongo-db-portofolio.vercel.app/api/create",{
             method:"POST",
             data: {name : "Erlanggaht",pesan:"guddd",limitComment:1},
             withCredentials : true
         }).then(res =>  res)
         }
         as()
    },[])

return (
    <div className={`cardsImage cardsImages2 w-full h-screen sm:h-[100%]  before:shadow-md before:sm:grayscale hover:before:sm:grayscale-0 hover:cursor-text before:hover:sm:transition-all before:grayscale-0 dark:grayscale  dark:before:grayscale-0 dark:before:sm:grayscale-0
   `}  data-aos='fade-in'>

<section className={`h-full sm:w-full sm:py-16  py-12 sm:px-20 px-6 relative`} > 
        <h1 className={`TypographiTitle text-4xl text-white drop-shadow-md capitalize italic tracking-wider`} >Guestbook</h1>
        
        <div className={'Github_description mt-10 sm:mt-40 flex sm:justify-between flex-wrap gap-12 lg:gap-0'}>
       <div>
       <Textcroocked props=
       {{
        text:'Guestbook',
        bg : "bg-color-other-100",
        textcolor : "text-color-base-200",
        link : ''
       }}/>
       
       <h2  className={`text-3xl text-white drop-shadow-md uppercase font-bold w-[full] sm:w-[400px] mt-6 tracking-normal`}>{'please give comments, suggestions for my portfolio. I am very happy if given a response. 😃'}</h2>
       </div>
       <div className={`bg-bg-base opacity-95 rounded-sm shadow-xl py-2 px-3 w-[340px] h-[260px] sm:h-[360px]  cursor-default hover:opacity-100 transition`}>
            <div className={'relative h-full'}>
            <h1 className={'text-center text-lg'}>GuestBook</h1>
            <div className={`text-sm text-color-base-100 mt-6 h-2/3 overflow-auto overflow-x-hidden`}>
                {/* @ts-ignore */}
                {data ? data.response.data.map((m,i) => {
                    // @ts-ignore
                    return <p key={i}>{m.name} : {m.pesan}</p>
                }) : <ErrorServer/>}
            </div>

            <div className={'absolute bottom-0 right-0'}>
          {getLoginStorage ?
          <form onSubmit={(e) => SubmitComment(e)}> <input placeholder={'comment disini..'} className={'text-bg-base p-1'}/> </form>
          :  
          <a href={'/'} className={'px-2 py-3 inline-block text-color-base-100 text-[14px] hover:text-white'} onClick={(e)=>LoginGuest(e,LoginGuest,setLoginActive)}>login as a guest</a> }
            </div>

        </div>
    </div>
       </div>
    
    </section>

   </div>   
  )
}
