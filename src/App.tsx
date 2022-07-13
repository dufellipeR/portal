import { GlobalStyle } from './styles/GlobalStyle'
import 'react-toastify/dist/ReactToastify.css';
import { Slide, toast } from 'react-toastify';
import AppRoutes from './routes'

import { AuthProvider } from './hooks/auth';
import { SellOrdersProvider } from './hooks/useSellOrders'

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  transition: Slide,
  draggable: false,
  role: 'Warnings',
  autoClose: 3000,
});

export function App() {
  return (
    <AuthProvider>
      <SellOrdersProvider>
        <AppRoutes />
        <GlobalStyle />
      </SellOrdersProvider>
    </AuthProvider>
  )
}
