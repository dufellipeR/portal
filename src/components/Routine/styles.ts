import styled from "styled-components";   

export const Container = styled.div`
    border: 1px solid #126877;
    border-radius: 30px;
    padding: 50px;
    background-color: #ffff;
    text-align: center;
    min-width: 300px;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover { 
        background-color: #126877;
        transition: 0.2s ease-out;

        svg { 
            color: #fff;
        }
        
        h1 { 
            color: #fff;
        }
    } 
    
    h1 { 
        font-size: 16px;
        font-weight: bold;
        color: #126877;
    }
`;