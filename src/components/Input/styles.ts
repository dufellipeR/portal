import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > input {
    width: 100%;
    height: 2rem;
    border-radius: 4px;

    transition: 0.3s;

    &:hover {
      border-color: var(--dark-blue);
    }
  }
`;
