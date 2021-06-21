import { Container, Overlay } from './style'

import { Parallax } from 'react-parallax'

const AllParallax: React.FC = () => {
  return (
    <Parallax
      blur={10}
      bgImage="/assets/banner.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <Container id="coupon">
        <Overlay
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511961943537&text=Me%20interessei%20pelos%2010%25%20de%20desconto%20no%20primeiro%20furo."
        >
          <p>
            Tenha 10% de desconto em seu Primeiro Piercing! Basta clicar aqui e
            utilizar o Voucher para agendar o seu Piercing agora mesmo!
          </p>
        </Overlay>
      </Container>
    </Parallax>
  )
}

export default AllParallax
