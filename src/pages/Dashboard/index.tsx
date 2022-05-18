import { useEffect, useState } from 'react'
import { ContainerAnimated } from '../../components/ContainerAnimated'
import { SearchOutlined, ShoppingOutlined, SyncOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Routine } from '../../components/Routine'
import { Container, Routines } from './styles'
import { BackButton } from '../../components/BackButton'
import { motion } from 'framer-motion';
import { Alert, Badge } from 'antd'
import Marquee from 'react-fast-marquee';


export const Dashboard: React.FC<any> = () => {
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    window.addEventListener('online', checkConnection)
    window.addEventListener('offline', checkConnection)

    checkConnection()
  }, [])

  const checkConnection = () => {
    if (navigator.onLine) {
      setIsOnline(true)
    } else {
      setIsOnline(false)
    }

    console.log(navigator.onLine);
  }

    return (
      <ContainerAnimated>
        {!isOnline && (
          <Alert
            banner
            message={
              <Marquee pauseOnHover gradient={false}>
                Você está navegando no portal OFFLINE, conecte-se a internet
              </Marquee>
            }
          />
        )}

        <BackButton to='/' isLogout />

        {/* <Badge dot={true}>
          <button type='button'>
            <SyncOutlined style={{ fontSize: '32px', color: 'orange' }} spin />
          </button>
        </Badge> */}

        <Container>
          <h1 style={{ color: '#126877', fontWeight: 'bold' }}>Escolher Rotina</h1>

          <Routines>
            <Routine title='Pedidos de Venda' icon={<ShoppingOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/sellOrders' />
            <Routine title='Cadastro de Clientes' icon={<UsergroupAddOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/customers' />
            <Routine title='Consultas' icon={<SearchOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/queries' />
          </Routines>
      </Container>
    </ContainerAnimated>
  )
}
