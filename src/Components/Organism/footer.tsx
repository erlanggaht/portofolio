import { Garisfull } from "../Atoms/garis";
import InputFooter from "../Moleculs/inputFooter";

export default function FooterComponent() {
  return (
    <> <section className={'footerGrid relative'}>
       
    <div className={' h-full absolute left-6'}>
      <Garisfull/>
      </div>

    <div className={'footertop sm:flex sm:flex-row flex-col flex justify-end a gap-20  py-2 '}>
      <div className={'aboutFooter sm:px-10 sm:text-left  text-right px-10'}>
      <h2 className={'text-4xl font-bold uppercase'}> About</h2>
      <ul className={'mt-10 flex flex-col gap-5 font-thin text-md text-color-base-100 dark:text-bg-base'}>
        <a className={'linkfooterAbout'} href={'https://erlanggaht.verecel.app'}><li>Link Bio</li></a>
        <a className={'linkfooterAbout'} href={'https://instagram.com/erlanggaht93'}><li>Instagram</li></a>
        <a className={'linkfooterAbout'} href={'https://www.linkedin.com/in/erlangga-hidayatullah-60b53b262/'}><li>Linkedin</li></a>
        <a className={'linkfooterAbout'} href={'https://medium.com/@erlanggahidayat.md'}><li>Medium</li></a>
      </ul>
      </div>

      <div className={'letsConnectFooter text-right px-5 sm:px-8 '}>
      <h2 className={'text-4xl font-bold uppercase'}>Let's connect</h2>
      <div className={'mt-10'}>
        <p className={'mb-10 text-lg '}><span className={'inline-block w-3/4'}>if you want to learn to make a portfolio and learn programming. can send email to me. free</span></p>
        <InputFooter/>
      </div>
      </div>
    </div>
    </section>


    <section className={'flex justify-between mt-36 mx-8 sm:mx-16 flex-wrap gap-3 pt-6 px-7 mb-6 border-t-2 border-neutral-800 text-sm'}>
      <p>©2023 Erlangga Hidayatullah. All Rights Reserved.</p>
      <div className={'flex gap-4'}>
        <p className={'bg-color-other-200 text-bg-base px-3'}>Thanks to <a href={'https://unplash.com'}>Unplash.</a></p>
        <a href={'https://erlanggaht.vercel.app/terms/'}>Terms of use</a>
        <a href={'https://erlanggaht.vercel.app/privacy_policy/'}>Pripacy Policy</a>
      </div>
    </section></>
  )
}
