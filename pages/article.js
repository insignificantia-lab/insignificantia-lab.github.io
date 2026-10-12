import { DynamicLayout } from '@/themes/theme'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import BLOG from '@/blog.config'

const ArticleIndex = props => {
  const theme = siteConfig(
    'THEME',
    BLOG.THEME,
    props.NOTION_CONFIG
  )

  return (
    <DynamicLayout
      theme={theme}
      layoutName='LayoutPostList'
      {...props}
    />
  )
}

export async function getStaticProps() {
  const props =
    (await getGlobalData({
      from: 'article-index-props'
    })) || {}

  // Avoid sending the largest internal index to the browser.
  delete props.allPages

  return {
    props
  }
}

export default ArticleIndex
