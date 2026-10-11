import CONFIG from '../config'

const SiteFooter = () => {
  return (
    <footer className='ins-site-footer'>
      <div className='ins-footer-inner'>
        <strong>{CONFIG.INSIGNIFICANTIA_SITE_NAME}</strong>
        <span>© 2026 · Hosted with GitHub Pages</span>
      </div>
    </footer>
  )
}

export default SiteFooter
