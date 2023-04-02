import { useEffect } from "react"
import { login } from "../api/login"
import { getCurrentUserInfo } from "../api/login"
import { useRouter } from "../hooks/useRouter"
const Redirection = () => {
    const {routeTo} = useRouter()
    const authCode = new URL(document.location.toString()).searchParams.get('code')


    useEffect(()=>{
        login(authCode)
    },[])
  
    return (
    <div>Redirecting,..</div>
  )
}

export default Redirection