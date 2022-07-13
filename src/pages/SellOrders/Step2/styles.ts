import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
`;

export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    > img {
      border-radius: 8px;
    }
  }
`
