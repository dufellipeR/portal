import react from 'react'
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

interface IRoutineProps { 
    to: string;
    icon: JSX.Element;
    title: string;
}

export const Routine: react.FC<IRoutineProps> = (props) => { 
    const navigate = useNavigate()
    
    return (
        <Container onClick={() => navigate(props.to)}>
            {props.icon}
            <h1>{props.title}</h1>
        </Container>
    )
}