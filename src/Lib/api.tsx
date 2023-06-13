export default async function GETDATA() {
 const getData = await fetch('https://guestbook-mongo-db-portofolio.vercel.app/api/users',{method:'GET'})
return  getData.json()
}
