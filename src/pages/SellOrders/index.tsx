import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'

import { Container } from './styles'

export const SellOrders: React.FC = () => {
  return (
    <ContainerAnimated>
      <Container>
        <Header title='Pedidos de Venda' />
      </Container>
    </ContainerAnimated>
  )
}
