import { styled } from 'styled-components'
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  main {
    margin: auto;
    margin-bottom: 3rem;
    flex: 1;
    width: 100%;
    max-width: 86.4rem;
    word-wrap: break-word;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  }
`
