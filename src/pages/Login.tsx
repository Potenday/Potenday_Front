import Button from "../components/Button"
import styled from "styled-components"
import { useRouter } from "../hooks/useRouter"
import { BASE_URL } from "../api/constant"
function Login() {
  const {routeTo} = useRouter()
  const KAKAO_AUTH = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=http://localhost:3000/login/oauth2/callback/kakao&response_type=code`
  return (
    <Section>
    <h1>나의 이야기숲 시작하기</h1>
    <img src={'./images/img_소나무.png'} alt={'소나무'} width={66}/>
    <a href={KAKAO_AUTH}>카카오톡으로 시작하기</a>
    </Section>
  )
}

export default Login

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 60px;
height: 100vh;
`