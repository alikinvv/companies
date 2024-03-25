import styled from 'styled-components'

export const ModalHeader = styled.div`
    grid-area: header;
    font-weight: 600;
    font-size: 16px;
    display: grid;
    grid-template-columns: 1fr auto 5px;
    align-content: center;
    padding: 24px 32px 16px;
    width: 500px;

    .closeIcon {
        cursor: pointer;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 40px;
        margin-right: -11px;

        &:hover path {
            fill: #333;
        }

        path {
            transition: all 0.2s ease-in-out;
        }
    }
`

export const ModalBody = styled.div`
    width: 500px;
    grid-area: body;
    padding: 16px 32px;
    overflow-y: auto;
    overflow-x: initial;
    grid-template-rows: max-content;
    column-gap: 32px;

    .react-select__menu-portal {
        position: fixed;
    }
`

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 8px;
    padding: 0 32px 20px;
    width: 500px;

    button {
        padding: 9px 12px;
        line-height: 1;
    }
`

export const BackdropStyled = styled.div`
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        background: #fff;
    }
`
