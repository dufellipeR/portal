import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'

import { Container } from './styles'

export const Queries: React.FC = () => {
  return (
    <ContainerAnimated>
      <Container>
        <Header title='Consultas' />
      </Container>
    </ContainerAnimated>
  )
}
