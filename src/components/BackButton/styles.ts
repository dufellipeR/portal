import styled from "styled-components"
import { shade } from "polished";


export const Button = styled.button`
    margin-left: 30px;
    margin-top: 30px;
    border: 0px;
    background-color: transparent;
    cursor: pointer;

    &:hover { 
        transition: 5ms ease-in-out;
        transform: scale(1.05);
        color: ${shade(1, '#126877')};;
    }
`;