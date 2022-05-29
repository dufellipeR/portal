import { Button } from "antd";

interface Step2Props {
  onChangeStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step2: React.FC<Step2Props> = ({
  onChangeStep
}) => {
  const onPreviousStep = () => {
    onChangeStep(1)
  }

  const onNextStep = () => {
    onChangeStep(3)
  }

  return (
    <>
      <h1>Step 2</h1>
      <Button onClick={onPreviousStep}>Etapa Anterior</Button>
      <Button type="primary" onClick={onNextStep}>Próxima Etapa</Button>
    </>
  )
}
