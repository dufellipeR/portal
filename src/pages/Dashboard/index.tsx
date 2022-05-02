import React from 'react'
import { SearchOutlined, ShoppingOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { useNavigate } from 'react-router-dom'
import { Routine } from '../../components/Routine'
import { Container, Routines } from './styles'

export const Dashboard: React.FC<any> = () => {
    const navigate = useNavigate()

    return (
        <>
            <Button type="primary" onClick={() => { navigate('/') }} danger>
                Logout
            </Button>
            <Container>


                <h1 style={{ color: '#126877', fontWeight: 'bold' }}>Escolher Rotina</h1>

                <Routines>
                    <Routine title='Pedidos de Venda' icon={<ShoppingOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/sellOrders' />

                    <Routine title='Cadastro de Clientes' icon={<UsergroupAddOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/customers' />

                    <Routine title='Consultas' icon={<SearchOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/queries' />

                </Routines>
            </Container>
        </>
    )
}