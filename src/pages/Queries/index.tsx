import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Queries: React.FC<any> = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Consultas</h1>
            <Button type="primary" onClick={() => { navigate('/') }} danger>
                Logout
            </Button>
        </>

    )
}