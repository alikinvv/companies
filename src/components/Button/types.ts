import { CSSProperties } from 'styled-components'

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    style?: CSSProperties
}
