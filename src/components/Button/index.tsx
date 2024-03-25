import { FC } from 'react'
import { ButtonProps } from './types'
import { ButtonStyled } from './styles'

export const Button: FC<ButtonProps> = ({ children, onClick, style }) => {
    return <ButtonStyled {...{ onClick, style }}>{children}</ButtonStyled>
}
