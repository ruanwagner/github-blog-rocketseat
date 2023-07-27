import { useCallback, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { api } from '../../lib/axios'
import { PostInfoCard, PostPageContainer } from './styles'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatDots,
  GithubLogo,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { IconAndInfo } from '../../components/IconAndInfo'
interface IPostDetail {
  title: string
  comments: number
  createdAt: string
  githubUsername: string
  url: string
  body: string
}
export function PostPage() {
  const [post, setPost] = useState<IPostDetail>({} as IPostDetail)
  const { id } = useParams()
  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `/repos/ruanwagner/github-blog-rocketseat/issues/${id}`,
    )
    const {
      title,
      comments,
      created_at: createdAt,
      user,
      html_url: htmlUrl,
      body,
    } = response.data
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: htmlUrl,
      body,
    }
    setPost(newPostObj)
  }, [id])
  useEffect(() => {
    fetchPost()
  }, [fetchPost])
  return (
    <PostPageContainer>
      <PostInfoCard>
        <header>
          <a href="/">
            <CaretLeft size={defaultTheme['18px']} weight="bold" /> VOLTAR
          </a>
          <a href={post.url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <ArrowSquareOut size={defaultTheme['18px']} weight="bold" />
          </a>
        </header>
        <h3>{post.title}</h3>
        <footer>
          <IconAndInfo
            textColor={defaultTheme['base-subtitle']}
            icon={
              <GithubLogo color={defaultTheme['base-label']} weight="bold" />
            }
            textInfo={post.githubUsername}
          />
          <IconAndInfo
            textColor={defaultTheme['base-subtitle']}
            icon={
              <CalendarBlank color={defaultTheme['base-label']} weight="bold" />
            }
            textInfo={post.createdAt}
          />
          <IconAndInfo
            textColor={defaultTheme['base-subtitle']}
            icon={<ChatDots color={defaultTheme['base-label']} weight="bold" />}
            textInfo={'' + post.comments + ' comentários'}
          />
        </footer>
      </PostInfoCard>
      <main>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </main>
    </PostPageContainer>
  )
}
