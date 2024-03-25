import { CSSProperties } from 'react'

export interface CheckboxProps {
    checked?: boolean
    disabled?: boolean
    align?: string
    onChange?: (check: boolean) => void
    labelColor?: string
    marginBottom?: boolean
    name?: string
    style?: CSSProperties
    centeredAtFilter?: boolean
}
