import styled from 'styled-components'
interface TextColorProps {
  colorForText: string
}
export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme['18px']};
`
export const TextInfo = styled.div<TextColorProps>`
  color: ${({ colorForText }) => colorForText};
  font-size: ${(props) => props.theme['16px']};
`
