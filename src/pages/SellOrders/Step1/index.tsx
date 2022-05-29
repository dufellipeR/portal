import { Button } from 'antd'

interface Step1Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step1: React.FC<Step1Props> = ({
  onChangeStep
}) => {
  const onNextStep = () => {
    onChangeStep(2)
  }

  return (
    <>
      <h1>Step 1</h1>
      <Button type="primary" onClick={onNextStep}>Próxima Etapa</Button>
    </>
  )
}
