import { Fragment } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';

import DescriptionItem from "../../../../components/DescriptionItem"

import { useSellOrders } from '../../../../hooks/useSellOrders'

interface DrawerCartProps {
  showDrawer: boolean
  onGetDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerCart: React.FC<DrawerCartProps> = ({
  showDrawer,
  onGetDrawer
}) => {
  const { productData } = useSellOrders();

  return (
    <Drawer
      placement='right'
      closable={true}
      onClose={() => onGetDrawer(false)}
      visible={showDrawer}
      width={640}
      key={1}
    >
      <h2>Produtos</h2>
      <Divider />
      {productData.map(product => (
        <Fragment key={product.product}>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Produto" content={product.product} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Quantidade" content={product.quantity} />
            </Col>
          </Row>
          <Divider />
        </Fragment>
      ))}
    </Drawer>
  )
}
