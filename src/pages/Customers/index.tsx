import { BackButton } from '../../components/BackButton'
import { motion } from 'framer-motion';

export const Customers: React.FC<any> = () => {


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
                <h1>Clientes</h1>
                {/* 
            Fazer padrão, tabela e criar novo, deixar a consulta de cliente nessa tela, usar tabelas do antd 
        
            */}
            </motion.div>
        </>
    )
}