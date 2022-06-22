export interface ClientDataProps {
  client: string
  store: string
  tablePrice: string
  typeShipping: string
  redispatch: string
  typeRedispatch: string
  paymentCondition: string
  deliveryDate: string
}

export interface ProductDataProps {
  item: string
  product: string
  quantity: number
  unityPrice: number
  totalPrice: number
  deliveryPreview: string
  deliveryReal: string
}
