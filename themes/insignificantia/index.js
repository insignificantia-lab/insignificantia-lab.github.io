import * as ExampleTheme from '../example'
import { Style as ExampleStyle } from '../example/style'
import { Style } from './style'
import CONFIG from './config'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './components/HomePage'

/**
 * Insignificantia. V1
 *
 * V1 只正式接管：
 * - 全站 Header / Footer
 * - 首页 Hero
 * - 首页最新 12 篇文章
 *
 * 其它页面暂时继续使用 example theme 的布局，
 * 这样可以先验证首页视觉和真实 Notion 数据，不一次改动所有页面。
 */
const LayoutBase = props => {
  return (
    <div id='theme-insignificantia'>
      <ExampleStyle />
      <Style />
      <SiteHeader />
      <div className='ins-page-shell'>{props.children}</div>
      <SiteFooter />
    </div>
  )
}

const LayoutIndex = props => {
  return <HomePage {...props} />
}

// V1 临时 fallback：非首页页面继续使用 example theme。
// 后续 ARTICLE / ARCHIVE / ARTICLE DETAIL / ABOUT 会逐个替换。
const EmptyLayout = () => <></>

const LayoutPostList = ExampleTheme.LayoutPostList || EmptyLayout
const LayoutSlug = ExampleTheme.LayoutSlug || EmptyLayout
const LayoutSearch = ExampleTheme.LayoutSearch || EmptyLayout
const LayoutArchive = ExampleTheme.LayoutArchive || EmptyLayout
const Layout404 = ExampleTheme.Layout404 || EmptyLayout
const LayoutCategoryIndex = ExampleTheme.LayoutCategoryIndex || EmptyLayout
const LayoutTagIndex = ExampleTheme.LayoutTagIndex || EmptyLayout
const LayoutSignIn = ExampleTheme.LayoutSignIn || EmptyLayout
const LayoutSignUp = ExampleTheme.LayoutSignUp || EmptyLayout

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSignIn,
  LayoutSignUp,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
