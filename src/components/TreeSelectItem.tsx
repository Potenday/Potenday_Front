import styled from "styled-components"
import { TREES } from "../api/constant"

type TreeItemProps = {
  treeName: string,
}
const TreeItem = ({treeName}:TreeItemProps) => {
  const tree = TREES.find((tree) => tree.name === treeName)
  return (
   <Section key={tree?.id}>
    <img src={tree?.img} alt={tree?.name} width='60px'/>
    <h1>{tree?.name}</h1>
    <p>{tree?.name}가 잘 어울리는 당신은...</p>
    <PropList start={1}>
      {tree?.property.map((prop,i) => <li key={`prop${i}`}>{prop}</li>)}
    </PropList>
   </Section>
  )
}

export default TreeItem

const Section = styled.div`
max-width: 428px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
padding: 30px;
gap: 20px;
`

const PropList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #3B5999 ;
  color: white;
  padding: 10px;
  border-radius:10px ;
  line-height: 20px;
`