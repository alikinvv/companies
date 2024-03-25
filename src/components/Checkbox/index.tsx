import { FC, PropsWithChildren } from 'react'
import {
    CheckboxContainerStyled,
    InputStyled,
    InputWrapperStyled,
} from './styles'
import { CheckboxProps } from './types'
export { CheckboxWrapperStyled as CheckboxWrapper } from './styles'

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
    disabled = false,
    checked,
    onChange,
    align,
    labelColor,
    marginBottom,
    name,
    style,
    centeredAtFilter,
}) => {
    const checkChangeHandler = () =>
        onChange && !disabled ? onChange(!checked) : null

    const id = Math.random().toString(36).substring(7)

    return (
        <CheckboxContainerStyled
            {...{
                disabled,
                checked,
                align,
                labelColor,
                marginBottom,
                style,
                centeredAtFilter,
            }}
        >
            <InputWrapperStyled>
                <InputStyled
                    {...{ id, name, disabled, checked }}
                    type="checkbox"
                    onChange={checkChangeHandler}
                />
                <svg x="0px" y="0px" viewBox="0 0 14 10.4">
                    <polyline points="0.7,4.7 5,9 13.3,0.7 " />
                </svg>
            </InputWrapperStyled>
        </CheckboxContainerStyled>
    )
}
