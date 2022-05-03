import { BackButton } from '../../components/BackButton'
import { motion } from 'framer-motion';

export const SellOrders: React.FC<any> = () => {

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
                <h1>Pedidos de Venda</h1>
            </motion.div>
        </>
    )
}