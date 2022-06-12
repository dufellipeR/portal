import { LeftOutlined, SearchOutlined, ShoppingOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Col, Row, Table } from 'antd'
import { useState } from 'react'
import { Button } from '../../components/BackButton/styles'
import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'
import { Routine } from '../../components/Routine'
import { Routines } from '../Dashboard/styles'
import CustomerTable from './CustomerTable'
import OrderTable from './OrderTable'

import { Container } from './styles'

export const Queries: React.FC = () => {

  const [queryType, setQuerytype] = useState('')

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 1,
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <ContainerAnimated>
      <Container>
        {queryType === '' && (
          <Header title='Consultas' />
        )}

        {!queryType && (
          <Routines>
            <Routine title='Clientes' icon={<UsergroupAddOutlined style={{ fontSize: '32px', color: '#126877' }} />} type="button" clickFunc={() => setQuerytype('customer')} />
            <Routine title='Pedidos' icon={<SearchOutlined style={{ fontSize: '32px', color: '#126877' }} />} type="button" clickFunc={() => setQuerytype('order')} />
          </Routines>
        )}
        {queryType === 'customer' && (
          <>
            <Row>
              <Col offset={11}>
                <h1>Clientes</h1>
              </Col>
            </Row>
            <Button type='button' onClick={() => setQuerytype('')}>
              <LeftOutlined style={{
                fontSize: '28px',
                color: '#134F9D',
              }} /> Voltar para consultas
            </Button>
            <CustomerTable />
          </>
        )}
        {queryType === 'order' && (
          <>
            <Row>
              <Col offset={11}>
                <h1>Pedidos</h1>
              </Col>
            </Row>
            <Button type='button' onClick={() => setQuerytype('')}>
              <LeftOutlined style={{
                fontSize: '28px',
                color: '#134F9D',
              }} /> Voltar para consultas
            </Button>
            <OrderTable />
          </>
        )}

      </Container>
    </ContainerAnimated>
  )
}
