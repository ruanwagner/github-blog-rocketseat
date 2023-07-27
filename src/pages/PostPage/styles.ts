import { styled } from 'styled-components'
export const PostPageContainer = styled.div`
  a {
    text-decoration: none;
    background: transparent;
    color: ${(props) => props.theme.blue};
    border-bottom: 2px solid transparent;
    &:hover {
      transition: border 0.5s;
      border-bottom: 2px solid ${(props) => props.theme.blue};
    }
  }
  main {
    margin: 3rem auto;
    flex: 1;
    width: 100%;
    max-width: 86.4rem;
    padding: 2.5rem;
    white-space: pre-wrap;
    font-size: large;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};

    strong {
      color: ${(props) => props.theme.blue};
    }

    img {
      max-width: 100%;
    }
  }
`
export const PostInfoCard = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 86.4rem;
  max-height: 21rem;
  padding: 3.3rem 2.5rem;
  gap: 2rem;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -8.5rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      font-weight: 700;
      gap: 0.8rem;
      font-size: ${(props) => props.theme['12px']};
    }
  }
  h3 {
    font-size: ${(props) => props.theme['20px']};
    color: ${(props) => props.theme['base-title']};

    margin-top: 0.8rem;
  }
  footer {
    display: flex;
    gap: 1rem;
  }
`
