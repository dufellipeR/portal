import { useState } from 'react';
import { Steps } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CheckOutlined
} from '@ant-design/icons';

import { useSellOrders } from '../../hooks/useSellOrders'

import { ContainerAnimated } from '../../components/ContainerAnimated'
import { Header } from '../../components/Header'

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

import { ClientDataProps, ProductDataProps } from './types'

import { Container, Content } from './styles'

const { Step } = Steps;

export const SellOrders: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2)

  const validateStep = (step: number): 'wait' | 'process' | 'finish' | 'error' => {
    if (step < currentStep) {
      return 'finish'
    }

    if (step === currentStep) {
      return 'process'
    }

    if (step > currentStep) {
      return 'wait'
    }

    return 'error'
  }

  return (
    <ContainerAnimated>
      <Container>
        <Header title='Pedidos de Venda' />

        <Content>
          <Steps>
            <Step status={validateStep(1)} title="Informação Cliente" icon={currentStep === 1 ? <LoadingOutlined /> : <UserOutlined />} />
            <Step status={validateStep(2)} title="Informação Produtos" icon={currentStep === 2 ? <LoadingOutlined /> : <SolutionOutlined />} />
            <Step status={validateStep(3)} title="Checkout" icon={currentStep === 3 ? <LoadingOutlined /> : <CheckOutlined />} />
          </Steps>

          {currentStep === 1 && <Step1 onChangeStep={setCurrentStep} />}
          {currentStep === 2 && <Step2 onChangeStep={setCurrentStep} />}
          {currentStep === 3 && <Step3 onChangeStep={setCurrentStep} />}
        </Content>

      </Container>
    </ContainerAnimated>
  )
}
