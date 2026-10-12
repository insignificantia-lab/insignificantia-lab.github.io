import { Style } from './style'
import { ArticleStyle } from './ArticleStyle'
import { ArchiveStyle } from './ArchiveStyle'
import { ArticleDetailStyle } from './ArticleDetailStyle'
import { AboutStyle } from './AboutStyle'
import { IntegrationOverrides } from './IntegrationOverrides'
import CONFIG from './config'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './components/HomePage'
import ArticleListPage from './components/ArticleListPage'
import ArchivePage from './components/ArchivePage'
import ArchiveResultPage from './components/ArchiveResultPage'
import ArticleDetailPage from './components/ArticleDetailPage'
import AboutPage from './components/AboutPage'

const LayoutBase = props => {
  return (
    <div id='theme-insignificantia'>
      <Style />
      <ArticleStyle />
      <ArchiveStyle />
      <ArticleDetailStyle />
      <AboutStyle />
      <IntegrationOverrides />
      <SiteHeader />
      <div className='ins-page-shell'>{props.children}</div>
      <SiteFooter />
    </div>
  )
}

const LayoutIndex = props => <HomePage {...props} />

const LayoutPostList = props => (
  <ArticleListPage {...props} />
)

const LayoutArchive = props => (
  <ArchivePage {...props} />
)

const LayoutTagIndex = props => (
  <ArchiveResultPage {...props} />
)

const LayoutCategoryIndex = props => (
  <ArchiveResultPage {...props} />
)

const LayoutSlug = props => {
  const slug = String(
    props?.post?.slug ||
    props?.slug ||
    ''
  ).toLowerCase()

  if (slug === 'about') {
    return <AboutPage {...props} />
  }

  return <ArticleDetailPage {...props} />
}

const Layout404 = () => (
  <main className='ins-system-page'>
    <div className='ins-page-kicker'>404</div>
    <h1>页面不存在</h1>
  </main>
)

// Insignificantia. v1 does not expose Search / Auth / Dashboard pages.
// Keep explicit empty layouts so the theme resolver never falls back to a
// built-in NotionNext theme for routes that are intentionally disabled.
const EmptyLayout = () => <></>
const LayoutSearch = EmptyLayout
const LayoutAuth = EmptyLayout
const LayoutSignIn = EmptyLayout
const LayoutSignUp = EmptyLayout
const LayoutDashboard = EmptyLayout

export {
  Layout404,
  LayoutArchive,
  LayoutAuth,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutDashboard,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSignIn,
  LayoutSignUp,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
