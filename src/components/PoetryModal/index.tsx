import { Box, CloseButton, Container, Content, Title } from './style'

import { MdClose } from 'react-icons/md'

import data from '../../poetrys.json'
import ModalEvents from '../../events/ModalEvents'

interface PoetryProps {
  id?: number
  title: string
  p?: string
}

const PoetryModal: React.FC<PoetryProps> = ({ title }) => {
  const poetry = data.find((poetry) => poetry.title === title)

  const closeModal = () => {
    ModalEvents.emit('title', '')
  }

  return (
    <Container>
      <Box initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Title>{poetry?.title}</Title>
        <Content>
          {poetry?.p.map((paragraph) => {
            return <p key={poetry?.id}>{paragraph}</p>
          })}
        </Content>
        <CloseButton onClick={closeModal}>
          <MdClose />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default PoetryModal
