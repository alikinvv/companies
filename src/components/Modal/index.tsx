import { FC } from 'react'
import { ModalProps } from './types'
import { BackdropStyled, ModalBody, ModalFooter, ModalHeader } from './styles'
import { CloseIcon } from 'assets/icons'

export const Modal: FC<ModalProps> = ({
    title,
    children,
    controls,
    onClose,
}) => {
    return (
        <BackdropStyled>
            <div>
                <ModalHeader>
                    {title}
                    <CloseIcon className="closeIcon" onClick={onClose} />
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>{controls}</ModalFooter>
            </div>
        </BackdropStyled>
    )
}
