import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
`;

export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* > div:nth-child(1) {
    background: green;
  } */

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      border-radius: 8px;
    }
  }
`
