
export default function Button({props} : any) {
    const {text} = props
  return (
    <>
    <button className={`button border-2 border-white text-color-base-200 py-3 px-6 text-md font-bold bg-[rgba(0,0,0,0.4)] mt-16 tracking-wider  hover:bg-white hover:text-bg-base transition ease-out duration-500`}>{text}</button>
    </>
  )
}
