import {SearchOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Divider, Drawer, Input, InputRef, Row, Space, Spin, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Container } from '../styles';


interface DataType {
  id: string;
  customer: string;
  orderNumber: string;
  status: string;
  shipping: string;
  redispatch: string;
  deliveryDate: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    id: '1',
    customer: 'John Brown',
    orderNumber: '111234987000180',
    status: 'Aberto',
    shipping: 'Saber INC.',
    redispatch: 'no idea',
    deliveryDate: '11/06/2022'
  },
  {
    id: '2',
    customer: 'Joe Black',
    orderNumber: '161214987000180',
    status: 'Faturado',
    shipping: 'Saber INC.',
    redispatch: 'no idea',
    deliveryDate: '07/06/2022'
  },
  {
    id: '3',
    customer: 'Jim Green',
    orderNumber: '148234987000154',
    status: 'Faturado',
    shipping: 'Saber INC.',
    redispatch: 'no idea',
    deliveryDate: '01/06/2022'
  },
  {
    id: '4',
    customer: 'Jim Red',
    orderNumber: '88939167000180',
    status: 'Aberto',
    shipping: 'Saber INC.',
    redispatch: 'no idea',
    deliveryDate: '10/06/2022'
  },


];



const OrderTable: React.FC<any> = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);


  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Procurar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Procurar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Resetar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtro
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Cliente',
      dataIndex: 'customer',
      key: 'customer',
      width: '30%',
      ...getColumnSearchProps('customer'),
      sorter: (a, b) => {
        if (a.customer < b.customer) { return -1; }
        if (a.customer > b.customer) { return 1; }
        return 0;
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Número do Pedido',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      ...getColumnSearchProps('orderNumber'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Aberto',
          value: 'Aberto',
        },
        {
          text: 'Faturado',
          value: 'Faturado',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) =>  {
        if(text === 'Aberto') {
          return <Badge status="processing" text={text} />
        }
        return <Badge status="success" text={text} />

       }
    },
    {
      title: 'Transportadora',
      dataIndex: 'shipping',
      key: 'shipping',
      ...getColumnSearchProps('shipping'),
    },
    {
      title: 'Redespacho',
      dataIndex: 'redispatch',
      key: 'redispatch',
      ...getColumnSearchProps('redispatch'),
    },
    {
      title: 'Data de Entrega',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      ...getColumnSearchProps('deliveryDate'),
    },
  ];

  return (
    <Container>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 650 }} />
    </Container>

  )
}

export default OrderTable
