import { ReactElement } from "react"
import styled from "styled-components"

interface ButtonStyles {
    children: React.ReactNode,
    borderRadius?: string | undefined,
    bgColor?: string | undefined,
    color?: string | undefined,
    padding?: string | undefined,
    width?: string | undefined,
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
ButtonStyles {
    children: React.ReactNode,
    className?: string,
    onClick: ()=> void,
}
const Button = ({children, className, onClick}:ButtonProps):ReactElement => {
  return (
    <StyledButton className={className} onClick={onClick}>
        {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonStyles>`
    border-radius: ${({borderRadius}) => borderRadius || '0'};
    background-color: ${({bgColor}) => bgColor || '#00A3FF'};
    color: ${({color}) => color || '#ffffff'};
    padding: ${({padding}) => padding || '0.5rem 1rem'};
    width: ${({width}) => width || 'auto'};

`

export default Button