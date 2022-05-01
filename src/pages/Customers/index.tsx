import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Customers: React.FC<any> = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Clientes</h1>
            <Button type="primary" onClick={() => { navigate('/') }} danger>
                Logout
            </Button>
            {/* 
            Fazer padrão, tabela e criar novo, deixar a consulta de cliente nessa tela, usar tabelas do antd 
        
        */}
        </>
    )
}