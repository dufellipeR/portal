import { useState } from 'react';
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

import { Container, Content } from './styles'

const { Step } = Steps;

export const SellOrders: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <ContainerAnimated>
      <Container>
        <Header title='Pedidos de Venda' />

        <Content>
          <Steps>
            <Step status="finish" title="Informação Cliente" icon={<UserOutlined />} />
            <Step status="finish" title="Informação Produtos" icon={<SolutionOutlined />} />
            <Step status="process" title="Checkout" icon={<LoadingOutlined />} />
          </Steps>

          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
        </Content>

      </Container>
    </ContainerAnimated>
  )
}
