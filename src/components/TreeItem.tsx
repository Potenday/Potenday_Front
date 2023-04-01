import styled from "styled-components";
import { TREES } from "../api/constant"

type TreeItemProps = {
    treeName: string,
  }

const TreeItem = ({treeName}:TreeItemProps) => {
    const tree = TREES.find((tree) => tree.name === treeName)
  return (
    <li>
        <img src={tree?.img} alt={tree?.name} width='60px'/>
        <p>{tree?.name}</p>
    </li>
  )
}

export default TreeItem