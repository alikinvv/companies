import styled from 'styled-components'

export const ButtonStyled = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #ccc;
    }
`
