import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IPost } from '../..'
import { formatText } from '../../../../utils/formatText'
import {
  ResumeBody,
  ResumeCardContainer,
  ResumeHeader,
  ResumeDate,
  ResumeTitle,
} from './styles'
interface IPostCard {
  post: IPost
}
export function ResumeCard({ post }: IPostCard) {
  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <ResumeCardContainer style={{ color: 'white' }} to={`/${post.number}`}>
      <ResumeHeader>
        <ResumeTitle>{post.title}</ResumeTitle>
        <ResumeDate>{formattedDate}</ResumeDate>
      </ResumeHeader>
      <ResumeBody>{formatText(post.body, 80)} </ResumeBody>
    </ResumeCardContainer>
  )
}
