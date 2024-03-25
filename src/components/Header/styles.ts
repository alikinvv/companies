import colors from 'colors'
import styled from 'styled-components'

export const HeaderStyled = styled.div`
    width: 100%;
    background: ${colors.main};
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 40px;

    a {
        color: #fff;
        font-size: 16px;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            color: #000;
        }
    }
`
