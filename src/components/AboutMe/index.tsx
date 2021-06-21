import {
  Container,
  Title,
  Profile,
  Poetry,
  PoetryButton,
  BoxProfile,
  Line,
  ContactButton
} from './style'

import PoetryModal from '../PoetryModal'
import { useModal } from '../../hooks/useModal'
import ModalEvents from '../../events/ModalEvents'

const AboutMe: React.FC = () => {
  const { title } = useModal()

  const handlePoetry = (poetryTitle: string) => {
    ModalEvents.emit('title', poetryTitle)
  }

  return (
    <Container id="aboutMe">
      {title && <PoetryModal title={title} />}
      <Title>Quem é Luis Piercer33?</Title>
      <Line />
      <BoxProfile>
        <Profile>
          <div>
            <img
              alt="Luis Guilherme"
              src="/assets/luis.jpg"
              // objectFit="cover"
              width={80}
              height={80}
            />
            <h2>LUIS GUILHERME STEIN</h2>
          </div>
          <h3>São Paulo - SP</h3>
          <p>
            <b>Idade: </b>23 Anos.
          </p>
          <p>
            <b>Profissão: </b>Body Piercer.
          </p>
          <p>
            <b>Piercings: </b>Nariz, septo, Rock, concha, helix, lóbulo, daith e
            flat.
          </p>
          <p>
            <b>Cursos: </b>Curso de Body piercing acompanhado por Bio Segurança.
          </p>
          <p>
            <b>Faculdade: </b>Educação Física.
          </p>
        </Profile>
        <Poetry>
          <h2>Minhas Poesias</h2>
          <PoetryButton onClick={() => handlePoetry('Olhar indefinido')}>
            Olhar indefinido
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Florescer do desastre')}>
            Florescer do desastre
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Prisão de ossos')}>
            Prisão de ossos
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Chuva salgada')}>
            Chuva salgada
          </PoetryButton>
          <PoetryButton onClick={() => handlePoetry('2°s')}>2°s</PoetryButton>
          <PoetryButton onClick={() => handlePoetry('Dias')}>Dias</PoetryButton>
        </Poetry>
      </BoxProfile>

      <ContactButton
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5511961943537&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20fazer%20um%20piercing."
      >
        Entre em contato agora para agendar o seu piercing comigo!
      </ContactButton>
    </Container>
  )
}

export default AboutMe
