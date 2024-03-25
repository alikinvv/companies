import { CSSProperties } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonSquareProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
    icon?: IconProps
    style?: CSSProperties
}

type IconProps = 'edit' | 'trash'
