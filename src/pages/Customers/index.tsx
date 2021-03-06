import { Button, Form, Input, Radio, Select, Row, Col } from 'antd'
import { useEffect, useState } from 'react'
import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'
import { loadCities, loadForm, loadStates } from '../../services/customer-register.service'

import { Container } from './styles'

interface IOptionProps {
  value: string;
  label: string;
}

export const Customers: React.FC = () => {
  const [sState, setSstate] = useState('')
  const [estados, setEstados] = useState<IOptionProps[]>([{ value: 'E1', label: 'Estado 1'},{ value: 'E2', label: 'Estado 2'},{ value: 'E3', label: 'Estado 3'},])
  const [cities, setCities] = useState<IOptionProps[]>([{ value: 'E1', label: 'Estado 1'},{ value: 'E2', label: 'Estado 2'},{ value: 'E3', label: 'Estado 3'},])
  useEffect(() => {
    loadStates().then((res) => {
      setEstados(() => (res.content.Estados.map((i:any) => (
        {
          value: i.Codigo,
          label: i.Descricao
        }
      ))))
    })
  }, [])

  useEffect(() => {
    console.log('chamou');

    loadCities(sState).then((res) => {
      console.log(res);

      setCities(() => (res.content.Municipios.map((i:any) => (
        {
          value: i.Codigo,
          label: i.Descricao
        }
      ))))
    })
  }, [sState])

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <ContainerAnimated>
      <Container>
        <Header title='Cadastro de Clientes' />
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={'middle'}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tipo"
            rules={[{ required: true, message: 'Por Favor, selecione um Tipo!' }]}
            name="type">
            <Radio.Group >
              <Radio value="pf">Pessoa F??sica</Radio>
              <Radio value="pj">Pessoa Jur??dica</Radio>

            </Radio.Group>
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item
                label="CPF/CNPJ"
                rules={[{ required: true, message: 'CPF/CNPJ inv??lido, tente novamente' }]}
                name="identifier"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tipo de Cliente">
                <Select>
                  <Select.Option value="">Selecione o Tipo de Cliente</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Raz??o Social"
                rules={[{ required: true, message: 'Raz??o Social inv??lida, tente novamente' }]}
                name="corporate_name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Nome Fantasia"
                rules={[{ required: true, message: 'Nome Fantasia inv??lido, tente novamente' }]}
                name="social_name"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Endere??o"
                rules={[{ required: true, message: 'Endere??o inv??lido, tente novamente' }]}
                name="adress"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Estado">
                <Select onChange={(e) => (setSstate(e))} options={estados}>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="C??d. Municipio"
                rules={[{ required: true, message: 'C??d. Municipio inv??lido, tente novamente' }]}
                name="city_code"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Municipio">
                <Select options={cities}
                      showSearch={true}
                      placeholder="Selecione um municipio"
                      optionFilterProp="label"
                      filterOption={(input, option) =>
                        (option!.label as string).toLowerCase().includes(input.toLowerCase())
                      }

                >
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="CEP"
                rules={[{ required: true, message: 'CEP inv??lido, tente novamente' }]}
                name="cep"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                rules={[{ required: true, message: 'Email inv??lido, tente novamente' }, {type: 'email'}, {type: 'string', min: 6}]}
                name="email"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="DDD"
                rules={[{ required: true, message: 'DDD inv??lido, tente novamente' }, {type: 'number', max: 3}]}
                name="ddd"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Telefone"
                rules={[{ required: true, message: 'Telefone inv??lido, tente novamente' }, {type: 'number', max: 8}]}
                name="phone"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Contato"
                rules={[{ required: true, message: 'Contato inv??lido, tente novamente' }]}
                name="contact"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item wrapperCol={{ offset: 4, span: 4 }}>
                <Button type="primary" htmlType="submit">
                  Cadastrar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Container>
    </ContainerAnimated>
  )
}
