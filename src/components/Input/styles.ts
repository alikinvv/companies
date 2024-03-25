import colors from 'colors'
import styled from 'styled-components'

export const InputStyled = styled.input<{ $error?: boolean }>`
    display: block;
    width: 100%;
    border: 1px solid;
    border-color: ${colors.grayLight};
    font-size: 14px;
    min-height: 32px;
    padding-left: 7px;
    -moz-appearance: textfield;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
        outline: 0;
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder {
        color: ${({ $error }) => ($error ? 'red' : colors.gray)};
        opacity: 1;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-background-clip: text;
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: inset 0 0 20px 20px #f6f9ff;
    }
`
