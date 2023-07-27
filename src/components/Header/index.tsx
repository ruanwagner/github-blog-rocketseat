import logoImg from '../../assets/banner.svg'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="logo header" />
    </HeaderContainer>
  )
}
