import * as ExampleTheme from '../example'
import { Style as ExampleStyle } from '../example/style'
import { Style } from './style'
import { ArticleStyle } from './ArticleStyle'
import { ArchiveStyle } from './ArchiveStyle'
import { ArticleDetailStyle } from './ArticleDetailStyle'
import { AboutStyle } from './AboutStyle'
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
      <ExampleStyle />
      <Style />
      <ArticleStyle />
      <ArchiveStyle />
      <ArticleDetailStyle />
      <AboutStyle />
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

// Not part of the current Insignificantia. product surface.
// Keep stable NotionNext fallbacks until/if these routes are needed.
const EmptyLayout = () => <></>
const LayoutSearch =
  ExampleTheme.LayoutSearch || EmptyLayout
const Layout404 =
  ExampleTheme.Layout404 || EmptyLayout
const LayoutSignIn =
  ExampleTheme.LayoutSignIn || EmptyLayout
const LayoutSignUp =
  ExampleTheme.LayoutSignUp || EmptyLayout

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
