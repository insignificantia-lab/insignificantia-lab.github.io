import { useEffect, useState } from 'react'

const SOCIALS = [
  {
    name: 'X',
    href: '#',
    icon: (
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z' />
    )
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z' />
    )
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <path d='M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.071 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.103c1.02.005 2.047.138 3.005.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.769.84 1.233 1.911 1.233 3.221 0 4.61-2.806 5.624-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.218.694.825.576A12 12 0 0 0 12 .297Z' />
    )
  }
]

const PORTFOLIO = Array.from(
  { length: 12 },
  (_, index) => ({
    id: index + 1,
    title: `作品 ${String(index + 1).padStart(2, '0')}`,
    description: '这里预留一段简短的作品介绍文字。',
    src: ''
  })
)

const AboutPage = () => {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setLightbox(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () =>
      window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <main className='ins-about-page'>
      <header className='ins-about-header'>
        <div className='ins-page-kicker'>ABOUT</div>
      </header>

      <section
        className='ins-social-strip'
        aria-label='社交媒体'>
        {SOCIALS.map(item => (
          <a
            key={item.name}
            href={item.href}
            className='ins-social-link'
            aria-label={item.name}
            target={
              item.href === '#'
                ? undefined
                : '_blank'
            }
            rel={
              item.href === '#'
                ? undefined
                : 'noreferrer'
            }>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'>
              {item.icon}
            </svg>
          </a>
        ))}
      </section>

      <section aria-label='我的视觉作品集'>
        <div className='ins-portfolio-kicker'>
          我的视觉作品集
        </div>

        <div className='ins-portfolio-grid'>
          {PORTFOLIO.map(item => (
            <article
              key={item.id}
              className='ins-portfolio-item'>
              <button
                type='button'
                className={`ins-portfolio-card ins-portfolio-placeholder-${(
                  (item.id - 1) %
                  4
                ) + 1}`}
                onClick={() =>
                  setLightbox(item)
                }
                aria-label={`预览 ${item.title}`}>
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.title}
                  />
                ) : (
                  <span className='ins-portfolio-number'>
                    {String(item.id).padStart(2, '0')}
                  </span>
                )}
              </button>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className='ins-lightbox'
          role='dialog'
          aria-modal='true'
          aria-label={lightbox.title}
          onMouseDown={event => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setLightbox(null)
            }
          }}>
          <div className='ins-lightbox-dialog'>
            <button
              type='button'
              className='ins-lightbox-close'
              aria-label='关闭预览'
              onClick={() =>
                setLightbox(null)
              }>
              ×
            </button>

            <div
              className={`ins-lightbox-image ins-portfolio-placeholder-${(
                (lightbox.id - 1) %
                4
              ) + 1}`}>
              {lightbox.src ? (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                />
              ) : (
                <span>
                  {String(
                    lightbox.id
                  ).padStart(2, '0')}
                </span>
              )}
            </div>

            <p>{lightbox.description}</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default AboutPage
