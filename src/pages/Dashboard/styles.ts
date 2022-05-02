import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10%;
    padding: 20px 150px 20px 150px ;

`;

export const Routines = styled.div`
    display: grid;
    margin-top: 130px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    gap: 100px;
`;