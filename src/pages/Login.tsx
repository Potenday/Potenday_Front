import Button from "../components/Button"
import styled from "styled-components"
function Login() {
  return (
    <Section>
    <h1>나의 이야기숲 시작하기</h1>
    <img src={'./images/img_소나무.png'} alt={'소나무'} width={66}/>
    <Button bgColor='#FFEB00' onClick={()=>{}} width='300px' borderRadius={'5px'}>카카오톡으로 시작하기</Button>
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