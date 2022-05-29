import { Button } from "antd";

interface Step3Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step3: React.FC<Step3Props> = ({
  onChangeStep
}) => {
  const onPreviousStep = () => {
    onChangeStep(2)
  }

  const onNextStep = () => {
    onChangeStep(3)
  }

  return (
    <>
      <h1>Step 3</h1>
      <Button onClick={onPreviousStep}>Etapa Anterior</Button>
      <Button type="primary" onClick={onNextStep}>Finalizar Cadastro</Button>
    </>
  )
}
