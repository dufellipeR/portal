import { Button, Col, Form, Input, Row } from 'antd'

import { ClientDataProps } from '../types';

import { Container } from './styles'

interface Step1Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
  onGetClientData: React.Dispatch<React.SetStateAction<ClientDataProps>>;
}

export const Step1: React.FC<Step1Props> = ({
  onChangeStep,
  onGetClientData,
}) => {
  const onFinish = (values: ClientDataProps) => {
    onGetClientData({
      name: values.name
    })
    onChangeStep(2)
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
              rules={[{ required: true, message: 'Cliente obrigatório' }]}
              name="client"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Loja"
              rules={[{ required: true, message: 'Loja obrigatória' }]}
              name="store"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Tabela de Preço"
              rules={[{ required: true, message: 'Tabela de Preço obrigatória' }]}
              name="table_price"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo do Frete"
              rules={[{ required: true, message: 'Frete obrigatório' }]}
              name="type_shipping"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Redespacho"
              rules={[{ required: true, message: 'Redespacho obrigatória' }]}
              name="redispatch"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo do Redespacho"
              rules={[{ required: true, message: 'Tipo do Redespacho obrigatório' }]}
              name="type_redispatch"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Condição Pagamento"
              rules={[{ required: true, message: 'Condição obrigatória' }]}
              name="payment_condition"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Data de Entrega"
              rules={[{ required: true, message: 'Data de Entrega obrigatória' }]}
              name="delivery_date"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">Próxima Etapa</Button>
      </Form>
    </Container>
  )
}
