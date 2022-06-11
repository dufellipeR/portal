import { Container, Label } from "./styles";

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({ title, content }) => (
  <Container>
    <Label>{title}:</Label>
    {content}
  </Container>
);

export default DescriptionItem;
