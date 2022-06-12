import react from 'react'
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

interface IRoutineProps {
    to?: string;
    icon: JSX.Element;
    title: string;
    type?: 'redirect' | 'button';
    clickFunc: Function;
}

export const Routine: react.FC<IRoutineProps> = ({ to, icon, title, type='redirect', clickFunc }) => {
    const navigate = useNavigate()

    const handleOnClick = () => {
      if(type === 'redirect' && to) {
        navigate(to)
      } else {
        clickFunc()
      }
    }

    return (
        <Container onClick={handleOnClick}>
            {icon}
            <h1>{title}</h1>
        </Container>
    )
}
