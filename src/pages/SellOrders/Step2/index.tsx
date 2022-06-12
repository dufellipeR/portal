import { useState } from "react";
import { Button, Form, Input, DatePicker } from "antd";

import { Input as InputDefault } from "../../../components/Input";

import { ProductDataProps } from '../types';

import { Container } from "../styles";
import { ContentForm } from "./styles";

interface Step2Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
  onGetProductData: React.Dispatch<React.SetStateAction<ProductDataProps>>;
}

export const Step2: React.FC<Step2Props> = ({
  onChangeStep,
  onGetProductData,
}) => {
  const [quantity, setQuantity] = useState(0)
  const multiplyNumber = 12;

  const getNextMultiplyNumber = (value: number, multiply: number) => {
    const nextMultiple = Math.ceil(value / multiply) * multiply
    setQuantity(nextMultiple);
  }

  const onPreviousStep = () => {
    onChangeStep(1)
  }

  const onNextStep = () => {
    onGetProductData({
      name: 'Asd',
    })
    onChangeStep(3)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  console.log(quantity)

  return (
    <Container>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={'middle'}
        onFinish={onNextStep}
        onFinishFailed={onFinishFailed}
        validateTrigger="onBlur"
      >
        <ContentForm>
          <div>
            <Form.Item
              label="Item"
              rules={[{ required: true, message: 'Item obrigatório' }]}
              name="item"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Produto"
              rules={[{ required: true, message: 'Produto obrigatória' }]}
              name="product"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantidade"
              rules={[{ required: true, message: 'Quantidade obrigatória' }]}
              name="quantity"
            >
              <Input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onBlur={() => getNextMultiplyNumber(quantity, multiplyNumber)}
              />
            </Form.Item>
            <Form.Item
              label="Preço Unitário"
              rules={[{ required: true, message: 'Preço Unitário obrigatório' }]}
              name="unit_price"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Valor Total"
              rules={[{ required: true, message: 'Valor Total obrigatória' }]}
              name="total_value"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Entrega Prevista"
              rules={[{ required: true, message: 'Entrega Prevista obrigatório' }]}
              name="estimated_delivery_time"
            >
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Entrega Real"
              rules={[{ required: true, message: 'Entrega Real obrigatória' }]}
              name="real_delivery_time"
            >
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" />
          </div>
        </ContentForm>
        <footer>
          <Button onClick={onPreviousStep}>Etapa Anterior</Button>
          <Button onClick={onPreviousStep}>Adicionar Item</Button>
          <Button type="primary" onClick={onNextStep}>Próxima Etapa</Button>
        </footer>
      </Form>
    </Container>
  )
}
