import { Button, Descriptions, Badge  } from "antd";

import { useSellOrders } from '../../../hooks/useSellOrders'

import DescriptionItem from "../../../components/DescriptionItem"
import { Container } from './styles'

interface Step3Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step3: React.FC<Step3Props> = ({
  onChangeStep
}) => {
  const { clientData, productData, onFinishOrder } = useSellOrders();

  const onPreviousStep = () => {
    onChangeStep(2)
  }

  return (
    <Container>
      <Descriptions title="Checkout" bordered>
        <Descriptions.Item label="Cliente" span={2}>{clientData.client || '-'}</Descriptions.Item>
        <Descriptions.Item label="Loja">{clientData.store || '-'}</Descriptions.Item>
        <Descriptions.Item label="Tabela">{clientData.tablePrice || '-'}</Descriptions.Item>
        <Descriptions.Item label="Data Entrega" span={2}>
          {clientData.deliveryDate || '-'}
        </Descriptions.Item>
        <Descriptions.Item label="Produtos" span={3}>
          {productData.length > 0 ? (
            productData.map(product => (
              <>
                <DescriptionItem title="Produto" content={product.product} key={product.product} />
                <br />
              </>
            ))
          ) : (
            '-'
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Valor Total Produtos">
          {/* {productData.reduce((acc, product) => acc + product.totalPrice, 0)} */}
          R$ 970,00
        </Descriptions.Item>
        <Descriptions.Item label="Valor Total Pedido">
          R$ 1000,00
        </Descriptions.Item>
      </Descriptions>
      <footer>
        <Button onClick={onPreviousStep}>Etapa Anterior</Button>
        <Button type="primary" onClick={onFinishOrder}>Finalizar Pedido</Button>
      </footer>
    </Container>
  )
}
