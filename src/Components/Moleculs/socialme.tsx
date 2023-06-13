import ig from '../../assets/icons/ig.svg'
import github from '../../assets/icons/github.svg'
import medium from '../../assets/icons/medium.svg'
import linkedin from  '../../assets/icons/linkedin.svg'

export default function SocialMe() {
  return (
    <>

    {/* Instagram */}
    <img src={ig} width={28} height={28} className={"dark:bg-bg-base rounded p-1"} />
    <img src={github} width={28} height={28} className={"dark:bg-bg-base rounded p-1"}/>
    <img src={medium} width={32} height={32} className={"dark:bg-bg-base rounded p-1"} />
    <img src={linkedin} width={29} height={29} className={"dark:bg-bg-base rounded p-1"}/>


    </>
  )
}
