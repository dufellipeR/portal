import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
} from "antd";
import { Moment } from "moment";

import { DrawerCart } from "./DrawerCart";

import { useSellOrders } from '../../../hooks/useSellOrders'
import { useAuth } from "../../../hooks/auth";
import api from "../../../services/api";

import { Container, ContentForm } from "./styles";

interface Step2Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

interface FormData {
  item: string
  product: string
  quantity: number
  unityPrice: number
  totalPrice: number
  deliveryPreview: Moment
  deliveryReal: Moment
}

export const Step2: React.FC<Step2Props> = ({
  onChangeStep,
}) => {
  const [hookForm] = Form.useForm()
  const { clientData, productData, setProductData } = useSellOrders();
  const { user } = useAuth();

  const [item, setItem] = useState(1)
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [unityPrice, setUnityPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [deliveryPreview, setDeliveryPreview] = useState('')
  const [deliveryReal, setDeliveryReal] = useState('')

  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.post('OxenConsProdutos/v1', {
          content: {
            PORTAL: "MTXVEN",
            VENDEDOR: user.Login,
            TABELA: clientData.tablePrice,
            PRODUTO: "",
          },
        });

        console.log('RESPONSE PRODUTO: ', response)
      } catch {}
    }

    loadProducts()
  }, [])

  const onPreviousStep = () => {
    onChangeStep(1)
  }

  const onNextStep = () => {
    onChangeStep(3)
  }

  const onSeeCart = () => {
    setShowDrawer(true)
  }

  const setNextMultiplyNumber = (value: number, multiply: number) => {
    const nextMultiple = Math.ceil(value / multiply) * multiply
    setQuantity(nextMultiple);
    hookForm.setFields([
      { name: 'quantity', value: nextMultiple },
    ])
    setTotalValue()
  }

  const setTotalValue = () => {
    setTotalPrice(quantity * unityPrice)
    hookForm.setFields([
      { name: 'totalPrice', value: quantity * unityPrice },
    ])
  }

  const handleAddItem = (values: FormData) => {
    setProductData([...productData, {
      item: values.item.toString().padStart(3, '0'),
      product: values.product,
      quantity: values.quantity,
      unityPrice: values.unityPrice,
      totalPrice: values.totalPrice,
      deliveryPreview: values.deliveryPreview.format('DD/MM/YYYY'),
      deliveryReal: values.deliveryReal.format('DD/MM/YYYY'),
    }])
    const oldItem = item
    setItem(oldItem + 1)
    hookForm.setFields([
      { name: 'item', value: oldItem + 1 },
    ])
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
              initialValue={item}
            >
              <Input readOnly/>
            </Form.Item>
            <Form.Item
              label="Produto"
              // rules={[{ required: true, message: 'Produto obrigatória' }]}
              name="product"
            >
              <Select>
                <Select.Option value="demo1">Produto 1</Select.Option>
                <Select.Option value="demo2">Produto 2</Select.Option>
                <Select.Option value="demo3">Produto 3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Quantidade"
              // rules={[{ required: true, message: 'Quantidade obrigatória' }]}
              name="quantity"
            >
              <Input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onBlur={() => {
                  setNextMultiplyNumber(quantity, 12)
                  setTotalValue()
                }}
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
                onBlur={setTotalValue}
                // readOnly
              />
            </Form.Item>
            <Form.Item
              label="Valor Total"
              // rules={[{ required: true, message: 'Valor Total obrigatória' }]}
              name="totalPrice"
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item
              label="Entrega Prevista"
              // rules={[{ required: true, message: 'Entrega Prevista obrigatório' }]}
              name="deliveryPreview"
              initialValue={clientData.deliveryDate}
            >
              <DatePicker
                format={'DD/MM/YYYY'}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item
              label="Entrega Real"
              // rules={[{ required: true, message: 'Entrega Real obrigatória' }]}
              name="deliveryReal"
              initialValue={clientData.deliveryDate}
            >
              <DatePicker
                format={'DD/MM/YYYY'}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </div>
          <div>
            <Button onClick={onSeeCart}>Visualizar Carrinho</Button>
            <img src="https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" />
          </div>
        </ContentForm>
        <footer>
          <Button onClick={onPreviousStep}>Etapa Anterior</Button>
          <Button htmlType="submit">Adicionar Item</Button>
          <Button type="primary" onClick={onNextStep}>Próxima Etapa</Button>
        </footer>
      </Form>
      <DrawerCart
        showDrawer={showDrawer}
        onGetDrawer={setShowDrawer}
      />
    </Container>
  )
}
