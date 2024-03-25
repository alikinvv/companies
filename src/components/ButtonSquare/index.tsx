import { FC } from 'react'
import { ButtonStyled } from './styles'
import { ButtonSquareProps } from './types'
import { TrashIcon, EditIcon } from '../../assets/icons'

const icons = {
    trash: <TrashIcon />,
    edit: <EditIcon />,
}

export const ButtonSquare: FC<ButtonSquareProps> = ({
    onClick,
    icon,
    style,
}) => {
    return (
        <ButtonStyled
            {...{
                onClick,
            }}
            style={style}
        >
            {icon && icons[icon]}
        </ButtonStyled>
    )
}
