import colors from 'colors'
import styled from 'styled-components'

export const ButtonStyled = styled.button<{ color?: string }>`
    color: #fff;
    padding: 6px 17px;
    background: ${colors.main};
    border: 0;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    user-select: none;
    opacity: 1;

    &:hover {
        opacity: 0.8;
    }
`
