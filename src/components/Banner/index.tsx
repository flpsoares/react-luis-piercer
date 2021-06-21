import { Container, ImageArea } from './style'

const Banner: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <img src="/assets/banner.jpg" alt="banner" />
      </ImageArea>
    </Container>
  )
}

export default Banner
