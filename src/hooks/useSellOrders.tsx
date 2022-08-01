import { createContext, useContext, useState } from "react";
import { ClientDataProps, ProductDataProps} from "../pages/SellOrders/types"

import { useAuth } from "./auth";
import api from "../services/api";

interface SellOrdersContextData {
  clientData: ClientDataProps
  setClientData: React.Dispatch<React.SetStateAction<ClientDataProps>>
  productData: ProductDataProps[]
  setProductData: React.Dispatch<React.SetStateAction<ProductDataProps[]>>
  onFinishOrder: () => Promise<void>
}

const SellOrdersContext = createContext<SellOrdersContextData>(
  {} as SellOrdersContextData,
)

const formatProducts = (products: ProductDataProps[]) => {
  const formattedProducts = products.map(product => {
    return {
      ITEM: product.item,
      PRODUTO: product.product,
      QUANTIDADE: product.quantity,
      PRCVEN: product.unityPrice,
      VALOR: product.totalPrice,
      DATAPREV: product.deliveryPreview,
      DATAENT: product.deliveryReal,
    }
  })

  return formattedProducts;
}

export const SellOrdersProvider: React.FC = ({ children }) => {
  const [clientData, setClientData] = useState({} as ClientDataProps);
  const [productData, setProductData] = useState<ProductDataProps[]>([]);

  const { user } = useAuth();

  const onFinishOrder = async () => {
    console.log('Finalizar Pedido')

    try {
      const response = await api.post('OxenPedido/v1', {
        content: {
          PORTAL: "PLXWMS",
          VENDEDOR: user.Login,
          CLIENTE: clientData.client,
          LOJA: clientData.store,
          TABELA: clientData.tablePrice,
          FRETE: clientData.typeShipping,
          REDESPACHO: clientData.redispatch,
          TIPOREDESP: clientData.typeRedispatch,
          CONDPAG: clientData.paymentCondition,
          DATAENT: clientData.deliveryDate,
          ITENS: formatProducts(productData),
        },
      })

      console.log('FINISH ORDER: ', response)
    } catch {}
  }

  return (
    <SellOrdersContext.Provider
      value={{
        clientData,
        setClientData,
        productData,
        setProductData,
        onFinishOrder,
      }}
    >
      {children}
    </SellOrdersContext.Provider>
  );
};

export function useSellOrders(): SellOrdersContextData {
  const context = useContext(SellOrdersContext);

  return context;
}
