import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard: React.FC<any> = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>DASHBOARD</h1>
            <Button type="primary" onClick={() => { navigate('/') }} danger>
                Logout
            </Button>

            <Button type="primary" onClick={() => { navigate('/sellOrders') }} block>
                Pedidos de Venda
            </Button>

            <Button type="primary" onClick={() => { navigate('/customers') }} block>
                Cadastro de Clientes
            </Button>

            <Button type="primary" onClick={() => { navigate('/queries') }} block>
                Consultas
            </Button>
        </>
    )
}