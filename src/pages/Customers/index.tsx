import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'

import { Container } from './styles'

export const Customers: React.FC = () => {
  return (
    <ContainerAnimated>
      <Container>
        <Header title='Cadastro de Clientes' />
      </Container>
    </ContainerAnimated>
  )
}
