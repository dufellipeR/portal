import React from 'react'
import { LeftOutlined, SearchOutlined, ShoppingOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { useNavigate } from 'react-router-dom'
import { Routine } from '../../components/Routine'
import { Container, Routines } from './styles'

export const Dashboard: React.FC<any> = () => {
    const navigate = useNavigate()

    return (
        <>
            <button type='button' onClick={() => { navigate('/') }} style={{ marginLeft: 30 + 'px', marginTop: 30, border: 0, backgroundColor: 'transparent', cursor: 'pointer' }}>
                <LeftOutlined style={{ fontSize: '32px', color: '#126877' }} />
            </button>
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