import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { motion } from 'framer-motion';

export const Queries: React.FC<any> = () => {

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
                <BackButton />
                <h1>Consultas</h1>
            </motion.div>
        </>

    )
}