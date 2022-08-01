import { FC, MouseEvent, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';

import { Button } from '../../components/Button'

import Matrix from '../../../assets/logo-matrix.png'
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, InputsArea } from './styles';

interface ResponseApiLogin {
  content: {
    CodUser: string
    Email: string
    Login: string
    Nivel: string
    Nome: string
    Valido: boolean
  }
}

export const Login: FC = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    const id = toast.loading('Concedendo acesso...');

    try {
      const response = await axios.post<ResponseApiLogin>('http://192.168.2.2:10000/rest/OXEVT001/OxenVtLogin/v1', {
        content: {
          LOGIN: user,
          SENHA: password,
          PORTAL: 'MTXVEN',
        },
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Token': 'zghMwfpkQVcLT%kFfQw&WSBW2%Pph3^o'
        },
      });

      updateUser(response.data.content)
      toast.update(id, {
        autoClose: 2000,
        render: 'Login realizado',
        type: 'success',
        isLoading: false,
      });
      navigate('dashboard')
    } catch {
      toast.update(id, {
        autoClose: 2000,
        render: 'Acesso negado',
        type: 'error',
        isLoading: false,
      });
    }
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
