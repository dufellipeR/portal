import { BackButton } from "../BackButton"

import { Container } from "./styles"

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <BackButton />
      <h1>{title}</h1>
      <div />
    </Container>
  )
}
