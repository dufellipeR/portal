import React from 'react'
import { LeftOutlined, SearchOutlined, ShoppingOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Routine } from '../../components/Routine'
import { Container, Routines } from './styles'
import { BackButton } from '../../components/BackButton'
import { motion } from 'framer-motion';

export const Dashboard: React.FC<any> = () => {


    return (
        <>
            <motion.div
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
                variants={{
                    initial: {
                        opacity: 0,
                    },
                    animate: {
                        opacity: 1,
                    },
                }}
            >
                <BackButton to='/' isLogout />
                <Container>


                    <h1 style={{ color: '#126877', fontWeight: 'bold' }}>Escolher Rotina</h1>

                    <Routines>
                        <Routine title='Pedidos de Venda' icon={<ShoppingOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/sellOrders' />

                        <Routine title='Cadastro de Clientes' icon={<UsergroupAddOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/customers' />

                        <Routine title='Consultas' icon={<SearchOutlined style={{ fontSize: '32px', color: '#126877' }} />} to='/queries' />

                    </Routines>
                </Container>
            </motion.div>
        </>
    )
}