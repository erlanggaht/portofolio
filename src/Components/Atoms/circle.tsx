import  { Garis16 } from "./garis";

export default function Circle() {
  return (
    <>
    <Garis16/>
    <div className={`h-3 w-3 opacity-40 rounded-full bg-color-base-100`}></div>
    <div className={`h-3 w-3 opacity-40 rounded-full bg-color-base-100`}></div>
    <div className={`h-3 w-3 opacity-40 rounded-full bg-color-base-100`}></div>
    <Garis16/>
    </>
  )
}
