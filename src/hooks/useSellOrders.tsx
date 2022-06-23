import { createContext, useContext, useState } from "react";
import { ClientDataProps, ProductDataProps} from "../pages/SellOrders/types"

interface SellOrdersContextData {
  clientData: ClientDataProps
  setClientData: React.Dispatch<React.SetStateAction<ClientDataProps>>
  productData: ProductDataProps
  setProductData: React.Dispatch<React.SetStateAction<ProductDataProps>>
}

const SellOrdersContext = createContext<SellOrdersContextData>(
  {} as SellOrdersContextData,
)

export const SellOrdersProvider: React.FC = ({ children }) => {
  const [clientData, setClientData] = useState({} as ClientDataProps);
  const [productData, setProductData] = useState({} as ProductDataProps);

  console.log('ClientData: ', clientData);
  console.log('ProductData: ', productData);

  return (
    <SellOrdersContext.Provider
      value={{
        clientData,
        setClientData,
        productData,
        setProductData,
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
