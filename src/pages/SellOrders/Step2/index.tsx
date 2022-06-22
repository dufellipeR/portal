import { useState } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
} from "antd";

import { useSellOrders } from '../../../hooks/useSellOrders'

import { ProductDataProps } from "../types";
import { DrawerCart } from "./DrawerCart";

import { Container, ContentForm } from "./styles";

interface Step2Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step2: React.FC<Step2Props> = ({
  onChangeStep,
}) => {
  const [hookForm] = Form.useForm()
  const { setProductData } = useSellOrders();

  const [item, setItem] = useState('')
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [unityPrice, setUnityPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [deliveryPreview, setDeliveryPreview] = useState('')
  const [deliveryReal, setDeliveryReal] = useState('')

  const [showDrawer, setShowDrawer] = useState(false)

  const getNextMultiplyNumber = (value: number, multiply: number) => {
    const nextMultiple = Math.ceil(value / multiply) * multiply
    setQuantity(nextMultiple);
    hookForm.setFields([
      { name: 'quantity', value: nextMultiple },
    ])
  }

  const onPreviousStep = () => {
    onChangeStep(1)
  }

  const onNextStep = () => {
    onChangeStep(3)
  }

  const handleAddItem = (values: ProductDataProps) => {
    setProductData({
      item: values.item,
      product: values.product,
      quantity: values.quantity,
      unityPrice: values.unityPrice,
      totalPrice: values.totalPrice,
      deliveryPreview: values.deliveryPreview,
      deliveryReal: values.deliveryReal,
    })
    setShowDrawer(true)
  }

  return (
    <Container>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={'middle'}
        onFinish={handleAddItem}
        form={hookForm}
      >
        <ContentForm>
          <div>
            <Form.Item
              label="Item"
              // rules={[{ required: true, message: 'Item obrigatório' }]}
              name="item"
            >
              <Input
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Produto"
              // rules={[{ required: true, message: 'Produto obrigatória' }]}
              name="product"
            >
              <Input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Quantidade"
              // rules={[{ required: true, message: 'Quantidade obrigatória' }]}
              name="quantity"
            >
              <Input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onBlur={() => getNextMultiplyNumber(quantity, 12)}
              />
            </Form.Item>
            <Form.Item
              label="Preço Unitário"
              // rules={[{ required: true, message: 'Preço Unitário obrigatório' }]}
              name="unityPrice"
            >
              <Input
                value={unityPrice}
                onChange={(e) => setUnityPrice(Number(e.target.value))}
              />
            </Form.Item>
            <Form.Item
              label="Valor Total"
              // rules={[{ required: true, message: 'Valor Total obrigatória' }]}
              name="totalPrice"
            >
              <Input
                value={totalPrice}
                onChange={(e) => setTotalPrice(Number(e.target.value))}
              />
            </Form.Item>
            <Form.Item
              label="Entrega Prevista"
              // rules={[{ required: true, message: 'Entrega Prevista obrigatório' }]}
              name="deliveryPreview"
            >
              <DatePicker
                format={'DD/MM/YYYY'}
                onChange={(_, dateString) => setDeliveryPreview(dateString)}
                style={{ width: '100%' }}
                />
            </Form.Item>
            <Form.Item
              label="Entrega Real"
              // rules={[{ required: true, message: 'Entrega Real obrigatória' }]}
              name="deliveryReal"
              >
                <DatePicker
                  format={'DD/MM/YYYY'}
                  onChange={(_, dateString) => setDeliveryReal(dateString)}
                  style={{ width: '100%' }}
                />
            </Form.Item>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" />
          </div>
        </ContentForm>
        <footer>
          <Button onClick={onPreviousStep}>Etapa Anterior</Button>
          <Button htmlType="submit">Adicionar Item</Button>
          <Button type="primary" onClick={onNextStep}>Próxima Etapa</Button>
        </footer>
      </Form>
      <DrawerCart showDrawer={showDrawer} onGetDrawer={setShowDrawer} />
    </Container>
  )
}
