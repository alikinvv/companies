import colors from 'colors'
import styled from 'styled-components'

export const WrapperStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 0 20px;
    padding-bottom: 40px;
`

export const TitleStyled = styled.div`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`

export const NoDataStyled = styled.div`
    color: ${colors.gray};
`

export const TopBarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3px;

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

export const FlexStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
