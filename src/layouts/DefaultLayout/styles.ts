import styled from 'styled-components'
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme['base-background']};
  @media (max-width: 750px) {
    padding: 0.8rem;
  }
`
