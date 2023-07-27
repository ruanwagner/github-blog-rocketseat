import { SearchPostContainer } from './styles'
interface SearchPostContainerProps {
  quantityPosts: number
  onBlurInputSearch: (searchedValue: string) => void
}
export function SearchPost({
  quantityPosts,
  onBlurInputSearch,
}: SearchPostContainerProps) {
  return (
    <SearchPostContainer>
      <header>
        <strong>Publicações</strong>
        <span>{quantityPosts} publicações</span>
      </header>
      <input
        type="text"
        name="search"
        placeholder="Buscar conteúdo"
        onKeyDown={(e) =>
          e.key === 'Enter' && onBlurInputSearch(e.currentTarget.value)
        }
        onBlur={(e) => onBlurInputSearch(e.currentTarget.value)}
      />
    </SearchPostContainer>
  )
}
