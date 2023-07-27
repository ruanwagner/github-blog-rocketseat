import { ProfileContainer } from './styles'
import { ProfileCard } from './components/ProfileCard'
import { SearchPost } from './components/SearchPost'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { ResumeCard } from './components/ResumeCard'
export interface IPost {
  title: string
  body: string
  created_at: string
  number: string
}
export function Home() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const [postsCounter, setPostsCounter] = useState(0)
  const fetchPosts = useCallback(async (query: string | null) => {
    const response = await api.get(
      `search/issues?q=${query}is:issue%20is:open%20repo:ruanwagner/github-blog-rocketseat`,
    )
    setPosts(response.data.items)
    setPostsCounter(response.data.total_count)
  }, [])
  function handleOnBlurInputSearch(searchedValue: string) {
    console.log(searchedValue)
    fetchPosts(searchedValue)
  }
  useEffect(() => {
    fetchPosts('')
  }, [fetchPosts])
  return (
    <ProfileContainer>
      <ProfileCard />
      <SearchPost
        quantityPosts={postsCounter}
        onBlurInputSearch={handleOnBlurInputSearch}
      />
      <main>
        {posts &&
          posts.map((post) => (
            <ResumeCard key={`${post.title}-${post.number}`} post={post} />
          ))}
      </main>
    </ProfileContainer>
  )
}
