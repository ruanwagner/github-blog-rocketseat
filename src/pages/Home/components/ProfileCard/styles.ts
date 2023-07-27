import { styled } from 'styled-components'
export const ProfileContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  max-width: 86.4rem;
  max-height: 21rem;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -8.5rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  img {
    border-radius: 8px;
    width: 16.5rem;
    height: 16.5rem;
  }
`
export const ProfileInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
`
export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  strong {
    font-size: ${(props) => props.theme['24px']};
    color: ${(props) => props.theme['base-title']};
  }
  a {
    display: inline-flex;
    gap: 0.8rem;
    align-items: center;
    font-size: ${(props) => props.theme['12px']};
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const ProfileBody = styled.div`
  font-size: ${(props) => props.theme['16px']};
  color: ${(props) => props.theme['base-text']};
`
export const ProfileFooter = styled.div`
  display: flex;
  gap: 2rem;
`
