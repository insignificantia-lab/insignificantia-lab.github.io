import Link from 'next/link'
import { useRouter } from 'next/router'

const PAGE_SIZE = 15

const safeNumber = (value, fallback) => {
  const number = Number(value)
  return Number.isFinite(number) && number > 0
    ? number
    : fallback
}

const getHref = post => {
  if (post?.href) return post.href
  if (post?.slug) return `/${post.slug}`
  return '/'
}

const getDate = post =>
  post?.publishDay || post?.date || ''

const isArticle = post => {
  if (!post) return false

  const type = String(post.type || '').toLowerCase()
  const excluded = new Set([
    'menu',
    'submenu',
    'page',
    'notice',
    'config'
  ])

  return !excluded.has(type)
}

const ArticleListPage = ({
  posts,
  archivePosts,
  postCount,
  totalPostCount,
  total,
  page,
  pageNum,
  currentPage: currentPageProp,
  kicker = 'ARTICLE',
  pageSize = PAGE_SIZE,
  makePageHref
}) => {
  const router = useRouter()

  const currentPage = safeNumber(
    router?.query?.page ||
      router?.query?.p ||
      page ||
      pageNum ||
      currentPageProp,
    1
  )

  const rawPosts =
    Array.isArray(posts) && posts.length > 0
      ? posts
      : Array.isArray(archivePosts)
        ? archivePosts
        : []

  const sourcePosts = rawPosts.filter(isArticle)

  const declaredPostCount = safeNumber(
    postCount ||
      totalPostCount ||
      total ||
      sourcePosts.length,
    sourcePosts.length
  )

  const totalPages = Math.max(
    1,
    Math.ceil(declaredPostCount / pageSize)
  )

  const postsAreAlreadyPaged =
    declaredPostCount > sourcePosts.length &&
    sourcePosts.length <= pageSize

  const visiblePosts = postsAreAlreadyPaged
    ? sourcePosts
    : sourcePosts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )

  const pageHref = pageNumber => {
    if (typeof makePageHref === 'function') {
      return makePageHref(pageNumber)
    }

    return pageNumber === 1
      ? '/article'
      : `/page/${pageNumber}`
  }

  return (
    <main className='ins-article-index'>
      <header className='ins-article-index-header'>
        <div className='ins-page-kicker'>
          {kicker}
        </div>
      </header>

      <section
        className='ins-article-index-list'
        aria-label={kicker}>
        {visiblePosts.map((post, index) => (
          <Link
            key={
              post.id ||
              post.pageId ||
              post.slug ||
              `${post.title}-${index}`
            }
            href={getHref(post)}
            className='ins-article-list-card'
            aria-label={`阅读：${
              post?.title || 'Untitled'
            }`}>
            <div className='ins-article-list-date'>
              {getDate(post)}
            </div>

            <h2>{post?.title || 'Untitled'}</h2>

            {post?.summary && (
              <p>{post.summary}</p>
            )}

            <div className='ins-article-list-actions'>
              <span className='ins-read-more'>
                继续阅读
              </span>
            </div>
          </Link>
        ))}

        {visiblePosts.length === 0 && (
          <div className='ins-article-list-empty'>
            暂时没有可显示的文章。
          </div>
        )}
      </section>

      {totalPages > 1 && (
        <nav
          className='ins-pagination'
          aria-label='文章分页'>
          {Array.from(
            { length: totalPages },
            (_, index) => {
              const pageNumber = index + 1

              return (
                <Link
                  key={pageNumber}
                  href={pageHref(pageNumber)}
                  aria-current={
                    pageNumber === currentPage
                      ? 'page'
                      : undefined
                  }
                  className={`ins-page-dot ${
                    pageNumber === currentPage
                      ? 'is-current'
                      : ''
                  }`}>
                  {pageNumber}
                </Link>
              )
            }
          )}
        </nav>
      )}
    </main>
  )
}

export default ArticleListPage
