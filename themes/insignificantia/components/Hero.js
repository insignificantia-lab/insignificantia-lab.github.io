import Link from 'next/link'
import { useEffect, useState } from 'react'

const SLIDES = [
  {
    label: 'DESIGN / 01',
    className: 'ins-slide-one'
  },
  {
    label: 'DESIGN / 02',
    className: 'ins-slide-two'
  },
  {
    label: 'DESIGN / 03',
    className: 'ins-slide-three'
  }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent(value => (value + 1) % SLIDES.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className='ins-hero'>
      <div className='ins-hero-copy'>
        <div className='ins-kicker'>HOBBY DRIVEN · AI NATIVE</div>

        <h1>以爱好驱动的AI原生博客。</h1>

        <p>
          游戏行业深度洞察，模拟驾驶，跑鞋与厨艺，与AI共同完成。
        </p>

        <div className='ins-hero-actions'>
          <a className='ins-button ins-button-primary' href='#latest-posts'>
            浏览文章 →
          </a>
          <Link className='ins-button ins-button-secondary' href='/about'>
            关于这里
          </Link>
        </div>
      </div>

      <div className='ins-hero-visual'>
        <div className='ins-carousel' aria-label='视觉作品轮播'>
          {SLIDES.map((slide, index) => (
            <div
              key={slide.label}
              className={`ins-carousel-slide ${slide.className} ${
                index === current ? 'is-active' : ''
              }`}>
              <span>{slide.label}</span>
            </div>
          ))}

          <button
            type='button'
            className='ins-carousel-arrow ins-carousel-arrow-left'
            aria-label='上一张'
            onClick={() =>
              setCurrent(value => (value - 1 + SLIDES.length) % SLIDES.length)
            }>
            ‹
          </button>

          <button
            type='button'
            className='ins-carousel-arrow ins-carousel-arrow-right'
            aria-label='下一张'
            onClick={() =>
              setCurrent(value => (value + 1) % SLIDES.length)
            }>
            ›
          </button>

          <div className='ins-carousel-dots'>
            {SLIDES.map((slide, index) => (
              <button
                type='button'
                key={slide.label}
                aria-label={`切换到第 ${index + 1} 张`}
                className={index === current ? 'is-active' : ''}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>

        <div className='ins-symbols' aria-hidden='true'>
          <span>△</span>
          <span>○</span>
          <span>□</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
