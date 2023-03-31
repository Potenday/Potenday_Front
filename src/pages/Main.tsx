import Button from "../components/Button"
import styled from "styled-components"

function Main() {
  return (
    <Section>
      <UpperSection>
      <H1>00님의 숲</H1>
      <Button onClick={()=>{}}>확인하기</Button>
      </UpperSection>
    <BtnSection>
      <ImgBtn>
        <img src={'./images/kakao-share-icon.svg'} alt={'카카오톡'} width={24}/>
      </ImgBtn>
      <ImgBtn>
        <img src={'./images/copy-btn-icon.svg'} alt={'복사하기 버튼'} width={24}/>
      </ImgBtn>
    </BtnSection>
    </Section>
  )
}

export default Main

const Section = styled.section`
max-width: 428px;
/* background-image: url('./images/img_배경.png'); */
background-color: #09C206;
height: 100vh;
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 30px;
position: relative;
`

const H1 = styled.h1`
font-weight: 800;
font-size: 24px;
line-height: 27px;
color: #fff;
`

const UpperSection = styled.section`
height: 10%;
display: flex;
justify-content: space-between;
/* padding: 20px; */
`

const BtnSection = styled.section`
/* display: flex;
justify-content: flex-end;
gap: 20px; */
position: fixed;
bottom: 0;
right: 0;
`

const ImgBtn  = styled.button`
background: none;
`