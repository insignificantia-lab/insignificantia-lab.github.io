import Link from 'next/link'
import { useState } from 'react'
import CONFIG from '../config'

const SiteHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='ins-site-header'>
      <div className='ins-nav-inner'>
        <Link className='ins-brand' href='/' aria-label='Insignificantia. Home'>
          {CONFIG.INSIGNIFICANTIA_SITE_NAME}
        </Link>

        <nav className='ins-nav-links' aria-label='Primary navigation'>
          <Link href='/article'>ARTICLE</Link>
          <Link href='/archive'>ARCHIVE</Link>
          <Link href='/about'>ABOUT</Link>
        </nav>

        <button
          className='ins-menu-toggle'
          type='button'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}>
          <span />
        </button>
      </div>

      <nav
        className={`ins-mobile-menu ${open ? 'open' : ''}`}
        aria-label='Mobile navigation'>
        <Link href='/article' onClick={() => setOpen(false)}>
          ARTICLE
        </Link>
        <Link href='/archive' onClick={() => setOpen(false)}>
          ARCHIVE
        </Link>
        <Link href='/about' onClick={() => setOpen(false)}>
          ABOUT
        </Link>
      </nav>
    </header>
  )
}

export default SiteHeader
