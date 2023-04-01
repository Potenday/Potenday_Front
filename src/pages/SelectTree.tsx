import styled from "styled-components"
import Button from "../components/Button"
import TreeItem from "../components/TreeSelectItem"
import { TREES } from "../api/constant"
import { useState } from "react"

const SelectTree = () => {
  const TreeItems = TREES.map((tree) => <TreeItem treeName={tree.name} />)
  const [currentTree, setCurrentTree] = useState(TreeItems[0])

  const currentIndex = TreeItems.findIndex((tree) => tree.props.treeName === currentTree.props.treeName)

  const handleNextTree = () => {
    if (currentIndex === TreeItems.length - 1) {
      setCurrentTree(TreeItems[0])
    } else {
      setCurrentTree(TreeItems[currentIndex + 1])
    }
  }
  const handlePrevTree = () => {
    if (currentIndex === 0) {
      setCurrentTree(TreeItems[TreeItems.length - 1])
    } else {
      setCurrentTree(TreeItems[currentIndex - 1])
    }
  }
  return (
    <Section>
        <Button onClick={()=>{}} width={'50%'}>선택</Button>
        <h1>00님과 가장 잘 어울리는 나무는? <br /> 00님의 강점을 선택하며 선택해주세요!</h1>
        <ItemDiv>
        <button onClick={handlePrevTree}>
        <Arrow src={'./images/btn_next.arrow.png'} alt='prev' />
        </button>
        {currentTree}
        <button onClick={handleNextTree}>
        <Arrow src={'./images/btn_next.arrow.png'} alt='next' />
        </button>
        </ItemDiv>
    </Section>
  )
}

export default SelectTree

const Section = styled.section`
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 30px;
position: relative;
gap: 20px;
`

const Arrow = styled.img.attrs(({src, alt})=>({
  src: src,
  style:{
    transform: `rotate(${alt === 'next' ? '0' : '180'}deg)`
  },
}))`
  width: 30px;
`

const ItemDiv = styled.div`
display: flex;
`