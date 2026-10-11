import Link from 'next/link'
import { useEffect, useState } from 'react'

const SiteHeader = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className='ins-header'>
      <div className='ins-header-inner'>
        <Link href='/' className='ins-brand' aria-label='返回首页'>
          Insignificantia.
        </Link>

        <nav className='ins-nav-desktop' aria-label='主导航'>
          <Link href='/page/1'>ARTICLE</Link>
          <Link href='/archive'>ARCHIVE</Link>
          <Link href='/about'>ABOUT</Link>
        </nav>

        <button
          type='button'
          className='ins-menu-button'
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`ins-mobile-menu ${open ? 'is-open' : ''}`}>
        <Link href='/page/1' onClick={() => setOpen(false)}>
          ARTICLE
        </Link>
        <Link href='/archive' onClick={() => setOpen(false)}>
          ARCHIVE
        </Link>
        <Link href='/about' onClick={() => setOpen(false)}>
          ABOUT
        </Link>
      </div>
    </header>
  )
}

export default SiteHeader
