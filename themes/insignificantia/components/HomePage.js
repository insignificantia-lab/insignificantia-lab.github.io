import Hero from './Hero'
import PostCard from './PostCard'

const HomePage = props => {
  const source =
    (Array.isArray(props?.latestPosts) && props.latestPosts.length > 0
      ? props.latestPosts
      : props?.posts) || []

  const posts = source
    .filter(post => post && post.type !== 'Menu' && post.type !== 'SubMenu')
    .slice(0, 12)

  return (
    <>
      <Hero />

      <main id='latest-posts' className='ins-home-content'>
        <section className='ins-post-list' aria-label='最新文章'>
          {posts.map((post, index) => (
            <PostCard
              key={post.id || post.pageId || post.slug || `${post.title}-${index}`}
              post={post}
            />
          ))}

          {posts.length === 0 && (
            <div className='ins-empty-state'>
              暂时没有可显示的文章。
            </div>
          )}
        </section>

        <div className='ins-home-bottom-actions'>
          <a className='ins-button ins-button-primary' href='/page/1'>
            浏览全部
          </a>
          <a className='ins-button ins-button-secondary' href='#theme-insignificantia'>
            返回顶部 ↑
          </a>
        </div>
      </main>
    </>
  )
}

export default HomePage
