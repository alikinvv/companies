export interface ModalProps {
    title: string
    children: React.ReactNode
    controls: React.ReactNode
    onClose: () => void
}
