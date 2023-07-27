import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
export const ResumeCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 2.5rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 0.8rem;
  height: 25rem;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }
`
export const ResumeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: first baseline;
`
export const ResumeTitle = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-weight: 700;
  line-height: 160%;
  flex: 1;
  font-size: 1.8rem;
`
export const ResumeDate = styled.span`
  color: ${(props) => props.theme['base-span']};
  text-align: end;
  font-size: 1.3rem;
`
export const ResumeBody = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1.6rem;
  overflow: hidden;
  line-height: 160%;
  text-overflow: ellipsis;
`
