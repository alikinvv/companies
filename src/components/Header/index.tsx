import { Link } from 'react-router-dom'
import { HeaderStyled } from './styles'

export const Header = () => {
    return (
        <HeaderStyled>
            <Link to="/">Logo</Link>
        </HeaderStyled>
    )
}
