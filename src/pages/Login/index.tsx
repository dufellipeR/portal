import { FC, MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';

import { Button } from '../../components/Button'

import Matrix from '../../../assets/logo-matrix.png'
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, InputsArea } from './styles';

export const Login: FC = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    navigate('dashboard')
    // const id = toast.loading('Concedendo acesso...');

    // try {
    //   const response = await api.post('OxenVtLogin/v1', {
    //     content: {
    //       LOGIN: user,
    //       CONTRASENA: password,
    //       PORTAL: 'MTXVEN',
    //     },
    //   });

    //   console.log('response: ', response)
    //   updateUser({
    //     user,
    //   })
    //   navigate('dashboard')
    // } catch {
    //   toast.update(id, {
    //     autoClose: 2000,
    //     render: 'Acesso negado',
    //     type: 'error',
    //     isLoading: false,
    //   });
    // }
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
        <Input
          size="large"
          placeholder="Usuario"
          prefix={<UserOutlined />}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Input.Password
          size="large"
          placeholder="Senha"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
