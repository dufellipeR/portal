import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SellOrders: React.FC<any> = () => { 

    const navigate = useNavigate()
    return ( 
        <>
        <h1> Pedidos de Venda</h1>
        <Button type="primary" onClick={() => { navigate('/') }} danger>
                Logout
            </Button>
        </>
    )
}