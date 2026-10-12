import { useRouter } from 'next/router'
import ArticleListPage from './ArticleListPage'

const ArchiveResultPage = props => {
  const router = useRouter()

  const tag =
    router?.query?.tag ||
    router?.query?.category ||
    ''

  const label = Array.isArray(tag)
    ? tag[0]
    : decodeURIComponent(String(tag || ''))

  const base =
    router?.pathname?.includes('/category/')
      ? `/category/${encodeURIComponent(label)}/page`
      : `/tag/${encodeURIComponent(label)}/page`

  return (
    <ArticleListPage
      {...props}
      kicker={`ARCHIVE RESULT · ${label}`}
      makePageHref={pageNumber =>
        `${base}/${pageNumber}`
      }
    />
  )
}

export default ArchiveResultPage
