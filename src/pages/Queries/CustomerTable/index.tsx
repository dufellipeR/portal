import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Divider, Drawer, Input, InputRef, Row, Space, Spin, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import DescriptionItem from '../../../components/DescriptionItem';
import Spinner from '../../../components/Spinner';
import cnpjMask from '../../../utils/formatCnpj';
import formatCurrency from '../../../utils/formatCurrency';
import { Container } from '../styles';

interface CustomerProps {
  id: string;
  name: string;
  cnpj: string;
  status: string;
  firstBuy: string;
  lastBuy: string;
  freeOrder: string;
  openOrder: string;
  balanceToPay: number | string;
  lateAmount: number | string;
  biggestDelay: string;
  averageDelay: string;
  email: string;
  phone: string;
  contact: string;
}

interface DataType {
  id: string;
  name: string;
  cnpj: string;
  status: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    id: '1',
    name: 'John Brown',
    cnpj: '111234987000180',
    status: 'Ativo',
  },
  {
    id: '2',
    name: 'Joe Black',
    cnpj: '161214987000180',
    status: 'Inativo',
  },
  {
    id: '3',
    name: 'Jim Green',
    cnpj: '148234987000154',
    status: 'Inativo',
  },
  {
    id: '4',
    name: 'Jim Red',
    cnpj: '88939167000180',
    status: 'Ativo',
  },


];



const CustomerTable: React.FC<any> = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [visible, setVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerProps>()

  const showDetails = (id: string) => {
    setTimeout(() => {
      setSelectedCustomer({
        id: id,
        name: 'Dunder Mifflin INC.',
        cnpj: cnpjMask('41427449000118'),
        status: 'Inativo',
        averageDelay: '2',
        balanceToPay: formatCurrency(22343.21),
        biggestDelay: '3',
        contact: 'No idea what is that',
        email: 'dunder@dundermifflin.com',
        firstBuy: 'BUY 1',
        lastBuy: 'BUY 322',
        freeOrder: '43',
        lateAmount: formatCurrency(43223.12),
        openOrder: '2',
        phone: '47998815333'
      })
    }, 2000);
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  };

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
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      },
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) => <button style={{ background: 'transparent', border: 0, cursor: 'pointer' }} type='button' onClick={() => showDetails(record.id)}>{text}</button>,
    },
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
      ...getColumnSearchProps('cnpj'),
      render: (text) => cnpjMask(text)

    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Ativo',
          value: 'Ativo',
        },
        {
          text: 'Inativo',
          value: 'Inativo',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ['descend'],

    },
  ];

  return (
    <Container>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 650 }} />
      <Drawer
        placement='right'
        closable={true}
        onClose={onClose}
        visible={visible}
        width={640}
        key={1}
      >
        {selectedCustomer ? (
          <>
            <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
              Consulta Cliente
            </p>
            <p className="site-description-item-profile-p">Identificação</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="CNPJ" content={selectedCustomer.cnpj} />
              </Col>
              <Col span={12}>
                {selectedCustomer.status === 'Ativo' ? (
                  <DescriptionItem title="Status" content={<Badge status="success" text={selectedCustomer.status} />} />
                ) : (
                  <DescriptionItem title="Status" content={<Badge status="error" text={selectedCustomer.status} />} />
                )}

              </Col>

            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem title="Nome" content={selectedCustomer.name} />
              </Col>
            </Row>
            <Divider />
            <p className="site-description-item-profile-p">Compras</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Primeira" content={selectedCustomer.firstBuy} />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Última" content={selectedCustomer.lastBuy} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Pedidos Liberados" content={selectedCustomer.freeOrder} />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Pedidos em Aberto" content={selectedCustomer.openOrder} />
              </Col>
            </Row>
            <Divider />
            <p className="site-description-item-profile-p">Saldo</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Saldo a pagar" content={selectedCustomer.balanceToPay} />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Valor em atraso" content={selectedCustomer.lateAmount} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Maior Atraso" content={selectedCustomer.biggestDelay} />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Média de Atraso" content={selectedCustomer.averageDelay} />
              </Col>
            </Row>

            <Divider />
            <p className="site-description-item-profile-p">Contato</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Email" content={selectedCustomer.email} />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Telefone" content={selectedCustomer.phone} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Contato"
                  content={selectedCustomer.contact}
                />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col offset={12}>
                <Spinner />
              </Col>
            </Row>
          </>
        )}

      </Drawer>
    </Container>

  )
}

export default CustomerTable
