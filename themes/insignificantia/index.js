import * as ExampleTheme from '../example'
import { Style as ExampleStyle } from '../example/style'
import { Style } from './style'
import CONFIG from './config'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './components/HomePage'

/**
 * Insignificantia. Home V1.1
 *
 * 首页视觉基线严格按照已确认 index.html 重建。
 * V1.1 正式接管：Header / Home Hero / Home latest-post cards / Footer。
 * 其它页面仍暂时 fallback 到 example theme，后续逐页替换。
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

const LayoutIndex = props => <HomePage {...props} />
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
