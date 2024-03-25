import styled from 'styled-components'
import colors from 'colors'

export const CheckboxContainerStyled = styled.div<{
    disabled?: boolean
    checked?: boolean
}>`
    display: flex;
    align-items: center;

    &:hover::before {
        background: ${({ checked }) => (checked ? colors.gray : '#fff')};
        border-color: ${colors.gray};
    }

    svg {
        position: absolute;
        top: 4px;
        left: 2px;
        width: 14px;
        opacity: ${({ checked }) => (checked ? 1 : 0)};
        pointer-events: none;
        user-select: none;
        fill: #fff;
        enable-background: new 0 0 14 10.4;

        polyline {
            fill-rule: evenodd;
            clip-rule: evenodd;
            fill: none;
            stroke: #fff;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke-dasharray: 18px;
            stroke-dashoffset: ${({ checked }) => (checked ? 0 : 18)};
            transition: all 0.3s ease-in-out 0.1s;
        }
    }
`
export const InputStyled = styled.input`
    width: 18px;
    height: 18px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    content: '';
    border-radius: 2px;
    border: 2px solid
        ${({ disabled }) => (disabled ? colors.grayLight : colors.gray)};
    transition: all 0.2s ease-in-out;
    appearance: none;
    background: ${({ checked }) => (checked ? colors.gray : '#fff')};
`

export const InputWrapperStyled = styled.div`
    height: 18px;
    position: relative;
`

export const CheckboxWrapperStyled = styled.div`
    display: grid;
    height: 60;
    gap: 24px;
`
