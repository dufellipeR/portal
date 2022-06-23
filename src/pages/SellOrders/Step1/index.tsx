import { Button, Col, Form, Input, Row } from 'antd'
import { useState } from 'react';

import { useSellOrders } from '../../../hooks/useSellOrders'
import { ClientDataProps } from '../types';

import { Container } from './styles'

interface Step1Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step1: React.FC<Step1Props> = ({
  onChangeStep,
}) => {
  const { setClientData } = useSellOrders();

  const [client, setClient] = useState('')
  const [store, setStore] = useState('')
  const [tablePrice, setTablePrice] = useState('')
  const [typeShipping, setTypeShipping] = useState('')
  const [redispatch, setRedispatch] = useState('')
  const [typeRedispatch, setTypeRedispatch] = useState('')
  const [paymentCondition, setPaymentCondition] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')

  const onFinish = (values: ClientDataProps) => {
    setClientData({
      client: values.client,
      store: values.store,
      tablePrice: values.tablePrice,
      typeShipping: values.typeShipping,
      redispatch: values.redispatch,
      typeRedispatch: values.typeRedispatch,
      paymentCondition: values.paymentCondition,
      deliveryDate: values.deliveryDate,
    })
    onChangeStep(3)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        size={'middle'}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="Cliente"
              // rules={[{ required: true, message: 'Cliente obrigatório' }]}
              name="client"
            >
              <Input
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Loja"
              // rules={[{ required: true, message: 'Loja obrigatória' }]}
              name="store"
            >
              <Input
                value={store}
                onChange={(e) => setStore(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Tabela de Preço"
              // rules={[{ required: true, message: 'Tabela de Preço obrigatória' }]}
              name="tablePrice"
            >
              <Input
                value={tablePrice}
                onChange={(e) => setTablePrice(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo do Frete"
              // rules={[{ required: true, message: 'Frete obrigatório' }]}
              name="typeShipping"
            >
              <Input
                value={typeShipping}
                onChange={(e) => setTypeShipping(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Redespacho"
              // rules={[{ required: true, message: 'Redespacho obrigatória' }]}
              name="redispatch"
            >
              <Input
                value={redispatch}
                onChange={(e) => setRedispatch(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo do Redespacho"
              // rules={[{ required: true, message: 'Tipo do Redespacho obrigatório' }]}
              name="typeRedispatch"
            >
              <Input
                value={typeRedispatch}
                onChange={(e) => setTypeRedispatch(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Condição Pagamento"
              // rules={[{ required: true, message: 'Condição obrigatória' }]}
              name="paymentCondition"
            >
              <Input
                value={paymentCondition}
                onChange={(e) => setPaymentCondition(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Data de Entrega"
              // rules={[{ required: true, message: 'Data de Entrega obrigatória' }]}
              name="deliveryDate"
            >
              <Input
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">Próxima Etapa</Button>
      </Form>
    </Container>
  )
}
