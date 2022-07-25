import {
  Button,
  Col,
  Form,
  Input,
  Row,
  DatePicker,
  Select,
} from 'antd'
import { useEffect, useState } from 'react';
import { Moment } from "moment";

import { useSellOrders } from '../../../hooks/useSellOrders'
import { useAuth } from '../../../hooks/auth'
import api from '../../../services/api';

import { Container } from './styles'

interface Step1Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

interface FormData {
  client: string
  store: string
  tablePrice: string
  typeShipping: string
  redispatch: string
  typeRedispatch: string
  paymentCondition: string
  deliveryDate: Moment
}

export const Step1: React.FC<Step1Props> = ({
  onChangeStep,
}) => {
  const { setClientData } = useSellOrders();
  const { user } = useAuth();

  const [client, setClient] = useState([])
  const [store, setStore] = useState([])
  const [tablePrice, setTablePrice] = useState([])
  const [typeShipping, setTypeShipping] = useState([])
  const [redispatch, setRedispatch] = useState([])
  const [typeRedispatch, setTypeRedispatch] = useState([])
  const [paymentCondition, setPaymentCondition] = useState([])
  const [deliveryDate, setDeliveryDate] = useState('')

  useEffect(() => {
    const loadClient = async () => {
      try {
        const response = await api.post('OxenConsCliente/v1', {
          content: {
            PORTAL: "MTXVEN",
            VENDEDOR: user.Nome,
            CLIENTE: "",
            CNPJ: "",
            NOME: ""
          },
        });

        console.log('RESPONSE CLIENTE: ', response)
      } catch {}
    }

    loadClient()
  }, [])

  const onFinish = (values: FormData) => {
    setClientData({
      client: values.client,
      store: values.store,
      tablePrice: values.tablePrice,
      typeShipping: values.typeShipping,
      redispatch: values.redispatch,
      typeRedispatch: values.typeRedispatch,
      paymentCondition: values.paymentCondition,
      deliveryDate: values.deliveryDate.format('DD/MM/YYYY'),
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
              // rules={[{ required: true, message: 'Cliente obrigatório' }]}
              name="client"
            >
              <Select>
                <Select.Option value="demo1">Cliente 1</Select.Option>
                <Select.Option value="demo2">Cliente 2</Select.Option>
                <Select.Option value="demo3">Cliente 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Loja"
              // rules={[{ required: true, message: 'Loja obrigatória' }]}
              name="store"
            >
              <Select>
                <Select.Option value="demo1">Loja 1</Select.Option>
                <Select.Option value="demo2">Loja 2</Select.Option>
                <Select.Option value="demo3">Loja 3</Select.Option>
              </Select>
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
              <Select>
                <Select.Option value="demo1">Tabela de Preço 1</Select.Option>
                <Select.Option value="demo2">Tabela de Preço 2</Select.Option>
                <Select.Option value="demo3">Tabela de Preço 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo do Frete"
              // rules={[{ required: true, message: 'Frete obrigatório' }]}
              name="typeShipping"
            >
              <Select>
                <Select.Option value="demo1">Tipo do Frete 1</Select.Option>
                <Select.Option value="demo2">Tipo do Frete 2</Select.Option>
                <Select.Option value="demo3">Tipo do Frete 3</Select.Option>
              </Select>
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
              <Select>
                <Select.Option value="demo1">Redespacho 1</Select.Option>
                <Select.Option value="demo2">Redespacho 2</Select.Option>
                <Select.Option value="demo3">Redespacho 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tipo do Redespacho"
              // rules={[{ required: true, message: 'Tipo do Redespacho obrigatório' }]}
              name="typeRedispatch"
            >
              <Select>
                <Select.Option value="demo1">Tipo do Redespacho 1</Select.Option>
                <Select.Option value="demo2">Tipo do Redespacho 2</Select.Option>
                <Select.Option value="demo3">Tipo do Redespacho 3</Select.Option>
              </Select>
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
              <Select>
                <Select.Option value="demo1">Condição Pagamento 1</Select.Option>
                <Select.Option value="demo2">Condição Pagamento 2</Select.Option>
                <Select.Option value="demo3">Condição Pagamento 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Data de Entrega"
              // rules={[{ required: true, message: 'Data de Entrega obrigatória' }]}
              name="deliveryDate"
            >
              <DatePicker
                format={'DD/MM/YYYY'}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">Próxima Etapa</Button>
      </Form>
    </Container>
  )
}
