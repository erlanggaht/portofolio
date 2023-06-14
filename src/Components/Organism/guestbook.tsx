import  {  useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../GlobalContext/globalcontext"
import Textcroocked from "../Atoms/textcroocked"
import { TargetedEvent } from "preact/compat"
import { ErrorServer } from "../../Utils/typed"
import axios from "axios"
import { setCookie,parseCookies} from "nookies"

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



function jump(e : KeyboardEvent,...hidden : any) {
    //@ts-ignore
    const {hiddenInput,setHiddenInput} = hidden[0]
        if(e.key === 'Enter'){
            // @ts-ignore
            e.target.nextSibling.focus()
            setHiddenInput(true)
        }
    

}
    


export default function Guestbook() {
    const {setLoginActive}:any  = useContext(GlobalContext)
    const getLoginStorage = sessionStorage.getItem('login')
    const [hiddenInput,setHiddenInput] = useState(false)   
    const [input,setInput] = useState({
        name : "",
        pesan : ""
    })
    const [errorLimitInput,setInputLimitError] = useState('')
    const [api,setApi] = useState({})
    const [wr,setwr] = useState(false)

    useEffect(()=>{
        async function fn() {
            const getData = await fetch('https://guestbook-mongo-db-portofolio.vercel.app/api/users',{method:'GET'})
            const datas = await getData.json()
            setApi(datas)
        }
      fn()
    },[])

   useEffect(()=>{
        if(wr) {
            async function fn() {
                const getData = await fetch('https://guestbook-mongo-db-portofolio.vercel.app/api/users',{method:'GET'})
                const datas = await getData.json()
                setApi(datas)
            }
          fn()
        }

   },[wr])

   
    // Submit
         function Submit(e : TargetedEvent) {
         e.preventDefault()
         const getCookie = parseCookies().limit
         axios("https://guestbook-mongo-db-portofolio.vercel.app/api/create",{
                 method:"POST",
                 data: {name : input.name,pesan:input.pesan,limitComment:1},
            

                }).then(() => {
                    if(parseInt(getCookie) !== 5){
                        // @ts-ignore
                    setCookie(null,'limit',!getCookie ? 1 : parseInt(getCookie)+1)
                    } 
                    setwr(true)
         }).catch((err)=>{
            const textResponseError = err.response.data
             new Promise((resolve) => {
                   resolve(setInputLimitError(textResponseError))                   
             }).then(()=>{
                setTimeout(()=>{
                    setInputLimitError('')
                },3000)
            })            
         }) 
           
            
            setInput({name:"",pesan:""})
            setHiddenInput(false)
            setwr(false)
         }

        //  FnInput Onchange
        // @ts-ignore
        const FNinput = (e : TargetedEvent) => {
            const target = e.target;
            // @ts-ignore
            const name = target.name;

            setInput({
                ...input,
                 // @ts-ignore
                [name] : target.value
            })
           
        }
       

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
                { api.response ? api.response.data.map((m,i) => {
                    // @ts-ignore
                    return <p key={i}>{m.name} : {m.pesan}</p>
                }) : <ErrorServer/>}
                {/* @ts-ignore */}
               
            </div>

            <div className={'absolute bottom-0 right-0'}>
          {getLoginStorage ?
          <form onSubmit={(e) => Submit(e)} className={' text-right'}> 
          <span className={'text-[12px] text-color-base-100 font-thin italic px-1 py-2'}>{errorLimitInput}</span>
          <input name={'name'} value={input.name} tabIndex={1} placeholder={'Name.. [ Enter ] '} className={`text-gray-200 p-1 px-2 bg-[rgba(255,255,255,0.1)] 
          ${!hiddenInput ? "" : 'fixed'} right-[9999px]
          `} onKeyUp={(e) =>jump(e,{hiddenInput,setHiddenInput})} onChange={(e) => FNinput(e)}/> 
          <input name={'pesan'}  value={input.pesan}  tabIndex={2} max={99} maxLength={99} min={2} minLength={2} placeholder={'Comment.. [ Enter ]'} className={`text-gray-200 p-1 px-2 bg-[rgba(255,255,255,0.1)] 
           ${!hiddenInput ? 'fixed' : ""} right-[9999px]`} onChange={(e) => FNinput(e)} /> 
           {input.pesan && <button type={'submit'} className={'pl-2'}>submit</button>}
          </form>
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
