import { useEffect } from "react"
import { login } from "../api/login"
const Redirection = () => {
    const authCode = new URL(document.location.toString()).searchParams.get('code')

    useEffect(()=>{
        login(authCode)
    },[])
  
    return (
    <div>Redirecting,..</div>
  )
}

export default Redirection