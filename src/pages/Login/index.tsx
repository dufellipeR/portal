import { FC, MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';

import { Button } from '../../components/Button'

import Matrix from '../../../assets/logo-matrix.png'

import { Container, InputsArea } from './styles';

const Login: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    window.Main.sendMessage('Submitted login');

    console.log('Message sent! Check main process log in terminal.')
    navigate('dashboard')
  };

  return (
    <Container>
      <img
        width={600}
        height={'auto'}
        src={Matrix}
      />
      <InputsArea>
        <h1>Log in</h1>
        <Input size="large" placeholder="Usuario" prefix={<UserOutlined />} />
        <Input.Password
          size="large"
          placeholder="Senha"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Button
          size="large"
          onClick={handleSubmit} 
        >
          Entrar
        </Button>
      </InputsArea>
    </Container>
  );
};

export default Login;