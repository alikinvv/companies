import colors from 'colors'
import styled from 'styled-components'

export const Th = styled.th<{ width?: number }>`
    padding: 0 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    background: #f9f9f9;
    height: 40px;
    text-align: left;
    width: ${({ width }) => (width ? width : 'auto')};
`

export const Tr = styled.tr<{ $withHover?: boolean; $active?: boolean }>`
    height: 40px;
    background: ${({ $active }) => ($active ? '#d9eefc' : '#fff')};
    cursor: ${({ $withHover }) => ($withHover ? 'pointer' : 'normal')};

    &:hover {
        background: ${({ $withHover, $active }) =>
            $active ? '#d9eefc' : $withHover ? '#f3f3f3' : '#fff'};
    }
`

export const Td = styled.td<{ $align?: 'left' | 'center' | 'right' }>`
    padding: 4px 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: ${({ $align }) => ($align ? $align : 'left')};
`

export const Table = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border-top: 1px solid ${colors.grayLight};
    border-left: 1px solid ${colors.grayLight};

    ${Td}, ${Th}, ${Tr} {
        border-inline-end: 1px solid ${colors.grayLight};
        border-bottom: 1px solid ${colors.grayLight};
    }
`
