import { useEffect } from "react"
import { getCurrentUserInfo } from "../api/login"
import { useRouter } from "../hooks/useRouter"
const Redirection = () => {
    const {routeTo} = useRouter()

    useEffect(()=>{
        getCurrentUserInfo()
    },[])
  
    return (
    <div>Redirecting,..</div>
  )
}

export default Redirection