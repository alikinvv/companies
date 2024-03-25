import { FC } from 'react'
import { InputProps } from './types'
import { InputStyled } from './styles'

export const Input: FC<InputProps> = ({ value, onChange, $error }) => {
    return (
        <InputStyled
            placeholder="Введите"
            onChange={(event) => onChange(event.target.value)}
            {...{ value, $error }}
        ></InputStyled>
    )
}
