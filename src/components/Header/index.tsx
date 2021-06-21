/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, NavButton } from './style'

const Header: React.FC = () => {
  return (
    <Container>
      <a href="#">
        <img src="/assets/logo.png" id="logo" alt="logo" width={110} height={110} />
      </a>
      <div>
        <NavButton href="#aboutMe">SOBRE MIM</NavButton>
        <NavButton href="#galery">GALERIA</NavButton>
        <NavButton href="#coupon">CUPOM</NavButton>
      </div>
    </Container>
  )
}

export default Header
