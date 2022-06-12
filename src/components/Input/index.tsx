import { Container } from "./styles"

interface InputProps {
  label: string
  isRequired?: boolean
  messageError?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  isRequired = false,
  messageError = '',
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={label}>{isRequired && '*'}{label}:</label>
      <input type="text" {...rest} />
    </Container>
  )
}
