import { createContext, useContext, useState } from 'react';

interface ClientData {
  name: string
}

interface ProductData {
  name: string
}

interface SellOrdersContextData {
  clientData: ClientData
  setClientData: React.Dispatch<React.SetStateAction<ClientData>>;
  productData: ProductData
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}

const SellOrdersContext = createContext<SellOrdersContextData>(
  {} as SellOrdersContextData,
);

export const SellOrdersProvider: React.FC = ({ children }) => {
  const [clientData, setClientData] = useState({} as ClientData);
  const [productData, setProductData] = useState({} as ProductData);

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
