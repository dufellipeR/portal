import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1180px) {
    img {
      display: none;
    }
  }
`;

export const InputsArea = styled.div`
  background: #FFF;
  padding: 3rem;
  border-radius: 3rem;
  width: 33%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    color: var(--dark-blue);
    font-weight: 700;
  }

  @media (max-width: 1180px) {
    width: 100%;
  }
`
