import CONFIG from './config'

export const Style = () => {
  return (
    <style jsx global>{`
      #theme-insignificantia {
        --ins-bg: ${CONFIG.INSIGNIFICANTIA_COLOR_BG};
        --ins-bg-deep: ${CONFIG.INSIGNIFICANTIA_COLOR_BG_DEEP};
        --ins-surface: ${CONFIG.INSIGNIFICANTIA_COLOR_SURFACE};
        --ins-surface-hover: ${CONFIG.INSIGNIFICANTIA_COLOR_SURFACE_HOVER};
        --ins-text: ${CONFIG.INSIGNIFICANTIA_COLOR_TEXT};
        --ins-muted: ${CONFIG.INSIGNIFICANTIA_COLOR_TEXT_MUTED};
        --ins-faint: ${CONFIG.INSIGNIFICANTIA_COLOR_TEXT_FAINT};
        --ins-accent: ${CONFIG.INSIGNIFICANTIA_COLOR_ACCENT};
        --ins-accent-hover: ${CONFIG.INSIGNIFICANTIA_COLOR_ACCENT_HOVER};
        --ins-line: rgba(225, 231, 226, 0.10);
        --ins-shadow: 0 16px 38px rgba(5, 12, 16, 0.25),
          0 3px 10px rgba(5, 12, 16, 0.18);
        --ins-radius: 9px;
        --ins-max: 1400px;

        min-height: 100vh;
        background: var(--ins-bg);
        color: var(--ins-text);
        font-family: Inter, "Google Sans", "Noto Sans SC", "PingFang SC",
          "Microsoft YaHei", system-ui, -apple-system, sans-serif;
        font-weight: 400;
      }

      body {
        margin: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      #theme-insignificantia,
      #theme-insignificantia * {
        box-sizing: border-box;
      }

      #theme-insignificantia a {
        text-decoration: none;
      }

      .ins-page-shell {
        min-height: 60vh;
        background: var(--ins-bg);
      }

      /* Header */
      .ins-header {
        position: relative;
        z-index: 50;
        background: var(--ins-bg);
        border-bottom: 1px solid rgba(225, 231, 226, 0.055);
      }

      .ins-header-inner {
        max-width: var(--ins-max);
        height: 78px;
        margin: 0 auto;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .ins-brand {
        color: var(--ins-text) !important;
        font-size: 25px;
        line-height: 1;
        letter-spacing: -0.02em;
        font-weight: 700;
      }

      .ins-nav-desktop {
        display: flex;
        align-items: center;
        gap: 32px;
      }

      .ins-nav-desktop a,
      .ins-mobile-menu a {
        color: #c7cfcc !important;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.08em;
      }

      .ins-nav-desktop a:hover,
      .ins-mobile-menu a:hover {
        color: var(--ins-accent) !important;
      }

      .ins-menu-button {
        width: 44px;
        height: 44px;
        padding: 10px;
        border: 0;
        background: transparent;
        display: none;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
      }

      .ins-menu-button span {
        display: block;
        width: 22px;
        height: 1px;
        background: var(--ins-text);
      }

      .ins-mobile-menu {
        display: none;
      }

      /* Hero */
      .ins-hero {
        max-width: var(--ins-max);
        min-height: 590px;
        margin: 0 auto;
        padding: 78px 30px 86px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(480px, 600px);
        gap: 30px;
        align-items: center;
      }

      .ins-hero-copy {
        min-width: 0;
      }

      .ins-kicker {
        margin-bottom: 24px;
        color: var(--ins-accent);
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.16em;
        font-weight: 600;
      }

      .ins-hero h1 {
        max-width: 720px;
        margin: 0;
        color: var(--ins-text);
        font-size: clamp(52px, 5.5vw, 82px);
        line-height: 1.09;
        letter-spacing: -0.055em;
        font-weight: 700;
      }

      .ins-hero-copy > p {
        max-width: 640px;
        margin: 28px 0 0;
        color: var(--ins-muted);
        font-size: 16px;
        line-height: 2;
        letter-spacing: 0.01em;
      }

      .ins-hero-actions {
        margin-top: 32px;
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }

      .ins-button {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 18px;
        border: 1px solid rgba(237, 142, 172, 0.7);
        border-radius: var(--ins-radius);
        color: var(--ins-accent) !important;
        font-size: 14px;
        line-height: 1;
        font-weight: 600;
        transition: transform 160ms ease, background 160ms ease,
          color 160ms ease, border-color 160ms ease;
      }

      .ins-button:hover {
        transform: translateY(-1px);
        color: var(--ins-accent-hover) !important;
        border-color: var(--ins-accent-hover);
      }

      .ins-button-primary {
        background: var(--ins-accent);
        color: #253039 !important;
        border-color: var(--ins-accent);
      }

      .ins-button-primary:hover {
        background: var(--ins-accent-hover);
        color: #253039 !important;
      }

      .ins-hero-visual {
        min-width: 0;
      }

      .ins-carousel {
        position: relative;
        width: 100%;
        aspect-ratio: 1.36 / 1;
        overflow: hidden;
        border: 1px solid var(--ins-line);
        border-radius: var(--ins-radius);
        background: var(--ins-surface);
        box-shadow: var(--ins-shadow);
      }

      .ins-carousel-slide {
        position: absolute;
        inset: 0;
        opacity: 0;
        display: flex;
        align-items: flex-end;
        padding: 24px;
        transition: opacity 420ms ease;
        background-size: cover;
        background-position: center;
      }

      .ins-carousel-slide.is-active {
        opacity: 1;
      }

      .ins-carousel-slide span {
        color: rgba(242, 238, 228, 0.66);
        font-size: 11px;
        letter-spacing: 0.13em;
      }

      .ins-slide-one {
        background:
          radial-gradient(circle at 73% 28%, rgba(237, 142, 172, 0.22), transparent 24%),
          linear-gradient(140deg, #435965 0%, #293a43 46%, #17242b 100%);
      }

      .ins-slide-two {
        background:
          linear-gradient(35deg, rgba(237, 142, 172, 0.14), transparent 36%),
          radial-gradient(circle at 28% 63%, #5b6e78 0%, #2b3a43 38%, #1b282f 75%);
      }

      .ins-slide-three {
        background:
          linear-gradient(115deg, #24323a 0 25%, #61727a 26% 28%, #2d3f49 29% 58%, #814e61 59% 61%, #1c2930 62%);
      }

      .ins-carousel-arrow {
        position: absolute;
        z-index: 3;
        top: 50%;
        width: 42px;
        height: 42px;
        margin-top: -21px;
        border-radius: 50%;
        border: 1px solid rgba(242, 238, 228, 0.2);
        background: rgba(27, 39, 46, 0.58);
        color: var(--ins-text);
        font-size: 26px;
        line-height: 1;
        cursor: pointer;
        opacity: 0;
        transition: opacity 160ms ease, background 160ms ease;
      }

      .ins-carousel:hover .ins-carousel-arrow,
      .ins-carousel:focus-within .ins-carousel-arrow {
        opacity: 1;
      }

      .ins-carousel-arrow:hover {
        background: rgba(27, 39, 46, 0.85);
      }

      .ins-carousel-arrow-left {
        left: 16px;
      }

      .ins-carousel-arrow-right {
        right: 16px;
      }

      .ins-carousel-dots {
        position: absolute;
        z-index: 3;
        right: 18px;
        bottom: 18px;
        display: flex;
        gap: 7px;
      }

      .ins-carousel-dots button {
        width: 7px;
        height: 7px;
        padding: 0;
        border: 1px solid rgba(242, 238, 228, 0.45);
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
      }

      .ins-carousel-dots button.is-active {
        background: var(--ins-accent);
        border-color: var(--ins-accent);
      }

      .ins-symbols {
        min-height: 58px;
        padding: 19px 8px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
        color: rgba(174, 185, 185, 0.35);
        font-size: 21px;
        letter-spacing: 0.04em;
      }

      /* Home post list */
      .ins-home-content {
        max-width: var(--ins-max);
        margin: 0 auto;
        padding: 72px 30px 110px;
      }

      .ins-post-list {
        display: grid;
        gap: 42px;
      }

      .ins-post-card {
        display: block;
        width: 100%;
        min-height: 230px;
        padding: 48px 52px 50px;
        border: 1px solid var(--ins-line);
        border-radius: var(--ins-radius);
        background: var(--ins-surface);
        box-shadow: var(--ins-shadow);
        color: var(--ins-text) !important;
        transition: transform 180ms ease, background 180ms ease,
          box-shadow 180ms ease;
      }

      .ins-post-card:hover {
        transform: translateY(-2px);
        background: var(--ins-surface-hover);
        box-shadow: 0 20px 44px rgba(5, 12, 16, 0.29),
          0 4px 12px rgba(5, 12, 16, 0.18);
      }

      .ins-post-meta {
        margin-bottom: 17px;
        display: flex;
        align-items: center;
        gap: 14px;
        color: var(--ins-faint);
        font-size: 12px;
        line-height: 1.5;
      }

      .ins-post-tag {
        color: var(--ins-accent);
        font-weight: 600;
        letter-spacing: 0.08em;
      }

      .ins-post-card h2 {
        margin: 0 0 18px;
        color: var(--ins-text);
        font-family: Georgia, "Songti SC", "STSong", serif;
        font-size: clamp(27px, 2.4vw, 34px);
        line-height: 1.32;
        font-weight: 700;
      }

      .ins-post-card p {
        max-width: 980px;
        margin: 0;
        color: var(--ins-muted);
        font-size: 15px;
        line-height: 2;
        font-weight: 400;
      }

      .ins-empty-state {
        padding: 48px;
        border: 1px dashed var(--ins-line);
        border-radius: var(--ins-radius);
        color: var(--ins-faint);
        text-align: center;
      }

      .ins-home-bottom-actions {
        padding-top: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
      }

      /* Footer */
      .ins-footer {
        background: var(--ins-bg-deep);
        border-top: 1px solid rgba(225, 231, 226, 0.06);
      }

      .ins-footer-inner {
        max-width: var(--ins-max);
        min-height: 88px;
        margin: 0 auto;
        padding: 28px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: var(--ins-faint);
        font-size: 12px;
      }

      @media (max-width: 980px) {
        .ins-hero {
          grid-template-columns: minmax(0, 1fr) minmax(360px, 46%);
          gap: 28px;
        }

        .ins-hero h1 {
          font-size: clamp(46px, 6vw, 66px);
        }
      }

      @media (max-width: 760px) {
        .ins-header-inner {
          height: 70px;
          padding: 0 20px;
        }

        .ins-brand {
          font-size: 22px;
        }

        .ins-nav-desktop {
          display: none;
        }

        .ins-menu-button {
          display: flex;
        }

        .ins-mobile-menu {
          max-height: 0;
          overflow: hidden;
          display: grid;
          transition: max-height 220ms ease;
          border-top: 1px solid transparent;
        }

        .ins-mobile-menu.is-open {
          max-height: 190px;
          border-top-color: rgba(225, 231, 226, 0.055);
        }

        .ins-mobile-menu a {
          min-height: 52px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(225, 231, 226, 0.055);
        }

        .ins-hero {
          min-height: 0;
          padding: 68px 20px 64px;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        .ins-kicker {
          margin-bottom: 19px;
        }

        .ins-hero h1 {
          max-width: 590px;
          font-size: clamp(43px, 13vw, 61px);
          letter-spacing: -0.05em;
        }

        .ins-hero-copy > p {
          margin-top: 22px;
          font-size: 15px;
        }

        .ins-carousel {
          aspect-ratio: 1.18 / 1;
        }

        .ins-carousel-arrow {
          opacity: 1;
        }

        .ins-symbols {
          padding-right: 2px;
        }

        .ins-home-content {
          padding: 54px 20px 80px;
        }

        .ins-post-list {
          gap: 28px;
        }

        .ins-post-card {
          min-height: 0;
          padding: 34px 28px 36px;
        }

        .ins-post-card h2 {
          font-size: 27px;
        }

        .ins-home-bottom-actions {
          padding-top: 44px;
          flex-wrap: wrap;
        }

        .ins-footer-inner {
          min-height: 100px;
          padding: 28px 20px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }

        .ins-carousel-slide,
        .ins-post-card,
        .ins-button,
        .ins-mobile-menu {
          transition: none !important;
        }
      }
    `}</style>
  )
}
