
export default function Textcroocked({props} : any) {
    const {text,bg,textcolor,link} = props
  return (
    <>
     <a href={link}><span className={`${textcolor} ${bg} inline-block px-1 rotate-3`}>{text}</span></a>
    </>
  )
}
