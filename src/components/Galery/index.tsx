import {
  Container,
  SquareGalery,
  WhyMeContainer,
  WhyMe,
  BigNumbers,
  BoxBigNumbers
} from './style'

import { MdFace, MdHome, MdAvTimer } from 'react-icons/md'

import { GiLoveInjection } from 'react-icons/gi'

import Carousel from 'react-elastic-carousel'

const Galery: React.FC = () => {
  const breakPoints = [
    { width: 768, itemsToShow: 1 },
    { width: 1024, itemsToShow: 2 },
    { width: 1366, itemsToShow: 3 }
  ]
  return (
    <Container>
      <SquareGalery id="galery">
        <Carousel isRTL={false} breakPoints={breakPoints}>
          <img src="/assets/p1.jpg" alt="carrossel" />
          <img src="/assets/p2.jpg" alt="carrossel" />
          <img src="/assets/p3.jpg" alt="carrossel" />
          <img src="/assets/p4.jpg" alt="carrossel" />
          <img src="/assets/p5.jpg" alt="carrossel" />
          <img src="/assets/p6.jpg" alt="carrossel" />
          <img src="/assets/p7.jpg" alt="carrossel" />
          <img src="/assets/p8.jpg" alt="carrossel" />
          <img src="/assets/p9.jpg" alt="carrossel" />
          <img src="/assets/p10.jpg" alt="carrossel" />
          <img src="/assets/p11.jpg" alt="carrossel" />
          <img src="/assets/p12.jpg" alt="carrossel" />
          <img src="/assets/p13.jpg" alt="carrossel" />
          <img src="/assets/p14.jpg" alt="carrossel" />
          <img src="/assets/p15.jpg" alt="carrossel" />
          <img src="/assets/p16.jpg" alt="carrossel" />
          <img src="/assets/p17.jpg" alt="carrossel" />
          <img src="/assets/p18.jpg" alt="carrossel" />
          <img src="/assets/p19.jpg" alt="carrossel" />
          <img src="/assets/p20.jpeg" alt="carrossel" />
          <img src="/assets/p21.jpeg" alt="carrossel" />
        </Carousel>
      </SquareGalery>

      <WhyMeContainer>
        <BigNumbers>
          <div>
            <BoxBigNumbers>
              <MdFace size="70px" />
              <div>
                <h2>Clientes</h2>
                <p>120</p>
              </div>
            </BoxBigNumbers>
            <BoxBigNumbers>
              <GiLoveInjection size="70px" />
              <div>
                <h2>Total de Piercings Aplicados</h2>
                <p>143</p>
              </div>
            </BoxBigNumbers>
          </div>
          <div>
            <BoxBigNumbers>
              <MdHome size="70px" />
              <div>
                <h2>Piercings Aplicado a domicilio</h2>
                <p>95</p>
              </div>
            </BoxBigNumbers>
            <BoxBigNumbers>
              <MdAvTimer size="70px" />
              <div>
                <h2>Horas de Estudo</h2>
                <p>130</p>
              </div>
            </BoxBigNumbers>
          </div>
        </BigNumbers>
        <WhyMe>
          <h2>Porque Escolher o Luis Piercer Tatto?</h2>
          <p>
            Vocês querem aplicações de joias a Domicílio com altíssima qualidade e
            horário pontual?
          </p>
          <p>(Já aviso que eu chego até antes!)</p>
          <p>Então acharam o Body Piercer certo!</p>
          <p>Eu sou especializado em aplicações de joias na Orelha e no Nariz.</p>
        </WhyMe>
      </WhyMeContainer>
    </Container>
  )
}

export default Galery
