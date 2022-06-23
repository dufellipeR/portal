import { Drawer, Divider, Row, Col } from 'antd';

import DescriptionItem from "../../../../components/DescriptionItem"

interface DrawerCartProps {
  showDrawer: boolean
  onGetDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerCart: React.FC<DrawerCartProps> = ({
  showDrawer,
  onGetDrawer
}) => {
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
      <Row>
        <Col span={12}>
          <DescriptionItem title="Produto" content="Carrinho" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Quantidade" content="2" />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <DescriptionItem title="Produto" content="Carrinho" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Quantidade" content="2" />
        </Col>
      </Row>
    </Drawer>
  )
}
