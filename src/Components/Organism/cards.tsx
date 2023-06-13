import Button from "../Atoms/button";
import Switchdarkmode from "../Atoms/switchdarkmode";
import Textcroocked from "../Atoms/textcroocked";
import SkillsIcon from "../Moleculs/skills";



export default function Cards({props,data_aos}:any) {
    const {Title_typo,titledesc,desc,textbutton,link,cardsBg,id} = props
    const cards4 = cardsBg === 'cardsImages4 cardsBg4'
    const cards5 = cardsBg === 'cardsImages5'

   
  return (
   <div className={`cardsImage ${cardsBg} w-full h-screen sm:h-[100%]  before:shadow-md before:sm:grayscale hover:before:sm:grayscale-0 hover:cursor-text before:hover:sm:transition-all before:grayscale-0 dark:grayscale  dark:before:grayscale-0 dark:before:sm:grayscale-0 `}  data-aos={data_aos} id={id}>
   
     <section className={`h-full sm:w-full sm:py-16  py-12 sm:px-20 px-6 relative`} > 
     <video  className={`${cards4 ? "" : "hidden "} grayscale-0 dark:grayscale  dark:sm:grayscale-0 hover:sm:grayscale-0`} src={`${cards4? "https://res.cloudinary.com/djsizjaee/video/upload/v1686271917/stadium_-_40634_720p_xnguch.mp4" : ""}`} autoPlay={true} loop={true} playsInline={true} muted={true} ></video>     
        <h1 className={`TypographiTitle text-4xl text-white drop-shadow-md capitalize italic tracking-wider`} >{Title_typo}</h1>
        
        <div className={'Github_description mt-40  ]'}>
       <Textcroocked props=
       {{
        text:titledesc,
        bg : "bg-color-other-100",
        textcolor : "text-color-base-200",
        link : link
       }}/>
       
       <h2  className={`text-3xl text-white drop-shadow-md uppercase font-bold w-[full] sm:w-[400px] mt-6 tracking-normal`}>{desc} </h2>
        <a href={`${link}`} className={`relative ${cards4 && 'hidden' || cards5 && 'hidden'}`}> <Button props={{text : textbutton}}/></a>
        <div className={'absolute bottom-16 shadow-sm'} >
        {cards4 && <Switchdarkmode/> }
       </div>
       <div className={'absolute bottom-32 flex gap-2'}>
       {cards5 && <SkillsIcon/>}
       </div>

       </div>
    
    </section>
    </div>
  )
}
