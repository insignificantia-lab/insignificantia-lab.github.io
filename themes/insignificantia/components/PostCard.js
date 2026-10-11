import Link from 'next/link'

const normalizeTag = tag => {
  if (!tag) return ''
  if (typeof tag === 'string') return tag
  return tag.name || tag.value || tag.text || ''
}

const getPrimaryTag = post => {
  if (post?.category) {
    if (Array.isArray(post.category)) return normalizeTag(post.category[0])
    return normalizeTag(post.category)
  }
  if (Array.isArray(post?.tagItems) && post.tagItems.length > 0) {
    return normalizeTag(post.tagItems[0])
  }
  if (Array.isArray(post?.tags) && post.tags.length > 0) {
    return normalizeTag(post.tags[0])
  }
  return 'NOTE'
}

const getHref = post => {
  if (post?.href) return post.href
  if (post?.slug) return `/${post.slug}`
  return '#'
}

const PostCard = ({ post }) => {
  const href = getHref(post)
  const title = post?.title || 'Untitled'

  return (
    <Link
      href={href}
      className='ins-post-card'
      aria-label={`阅读：${title}`}>
      <div className='ins-post-meta'>
        <span className='ins-primary-tag'>{getPrimaryTag(post)}</span>
        <span>{post?.publishDay || post?.date || ''}</span>
      </div>

      <h2>{title}</h2>
      {post?.summary && <p>{post.summary}</p>}

      <div className='ins-post-card-footer'>
        <span className='ins-continue-reading'>继续阅读</span>
      </div>
    </Link>
  )
}

export default PostCard
