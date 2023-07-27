import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer, TextInfo } from './styles'
interface IconAndInfoProps {
  icon: ReactNode
  textInfo: string | null | undefined
  textColor: string
}
export function IconAndInfo({ icon, textColor, textInfo }: IconAndInfoProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer>{icon}</IconContainer>
      <TextInfo colorForText={textColor}>{textInfo}</TextInfo>
    </InfoWithIconContainer>
  )
}
