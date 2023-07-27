import { styled } from 'styled-components'
export const SearchPostContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 86.4rem;
  gap: 1.5rem;
  margin-top: 3rem;
  header {
    display: flex;
    justify-content: space-between;
    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: ${(props) => props.theme['18px']};
    }
    span {
      color: ${(props) => props.theme['base-span']};
      font-size: ${(props) => props.theme['14px']};
    }
  }
  input {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
