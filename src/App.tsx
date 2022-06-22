import { GlobalStyle } from './styles/GlobalStyle'
import AppRoutes from './routes'

import { SellOrdersProvider } from './hooks/useSellOrders'

export function App() {
  return (
    <SellOrdersProvider>
      <AppRoutes />
      <GlobalStyle />
    </SellOrdersProvider>
  )
}
