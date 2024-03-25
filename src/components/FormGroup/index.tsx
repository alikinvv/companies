import { FC } from 'react'
import { FormGroupStyled } from './styles'
import { FormGroupProps } from './types'

export { FormGroupStyled } from './styles'

export const FormGroup: FC<FormGroupProps> = ({ children, label }) => {
    return (
        <FormGroupStyled>
            {(label || label === '') && (
                <span>{label === '' ? '\u00A0' : label}</span>
            )}
            {children}
        </FormGroupStyled>
    )
}
