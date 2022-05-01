import { Button, Input, Image, Row, Col } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Matrix from '../../../assets/logo-matrix.png'



import { Container, Content, Hero, LoginArea, Form } from './styles';

interface ResponseApi {
  content: {
    Valido: boolean;
    Filial: string;
    Rotinas: string[];
  };
}

const style = { padding: '8px 0' };

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [key, setKey] = useState('');

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    window.Main.sendMessage('Submitted login');

    console.log('Message sent! Check main process log in terminal.')
    navigate('dashboard')
  };

  return (
    <Container style={{ marginTop: 25}}>
      <Row style={{  marginBottom: 25}}>
        <Col span={9} offset={8}>
          <img
            width={600}
            height={'auto'}
            src={Matrix}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 25}}>
        <Col span={9} offset={8}>
          <Input size="large" placeholder="Usuario" prefix={<UserOutlined />} />
        </Col>
      </Row>
      <Row style={{ marginBottom: 25}}>
        <Col span={9} offset={8} >
          <Input.Password
            size="large"
            placeholder="Senha"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Col>
      </Row>
      <Row >
        <Col span={9} offset={8}>
          <Button type="primary" onClick={handleSubmit} block>
            Entrar
          </Button>
        </Col>
      </Row>

    </Container>
  );
};

export default Login;