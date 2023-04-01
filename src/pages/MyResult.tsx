import styled from "styled-components"

const MyResult = () => {
  return (
    <Section>
        <h1>00님과 가장 잘 어울리는 나무!</h1>
        <p>친구들은 이 나무를 가장 많이 심었어요!</p>
    </Section>
  )
}

export default MyResult

const Section = styled.section`
max-width: 428px;
height: 100vh;
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 30px;
position: relative;
`