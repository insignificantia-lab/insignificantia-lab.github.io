export const ArticleDetailStyle = () => {
  return (
    <style jsx global>{`
      .ins-article-shell {
        background: var(--ins-bg);
      }

      .ins-article-header {
        max-width: 1080px;
        margin: 0 auto;
        padding: 88px 34px 42px;
      }

      .ins-article-date {
        margin-bottom: 22px;
        color: var(--ins-faint);
        font-size: 13px;
        line-height: 1.5;
        letter-spacing: 0.06em;
      }

      .ins-article-title {
        max-width: 980px;
        margin: 0;
        color: var(--ins-text);
        font-family: Georgia, "Songti SC", "STSong", serif;
        font-size: clamp(43px, 5.2vw, 64px);
        line-height: 1.22;
        letter-spacing: -0.028em;
        font-weight: 700;
      }

      .ins-article-layout {
        max-width: 1080px;
        margin: 0 auto;
        padding: 8px 34px 110px;
        display: grid;
        grid-template-columns: minmax(0, 810px) 190px;
        gap: 70px;
        align-items: start;
      }

      .ins-article-body {
        min-width: 0;
        color: #d2d5cf;
        font-size: 17.5px;
        line-height: 2;
        letter-spacing: 0.018em;
        font-weight: 450;
      }

      .ins-article-lead {
        margin: 0 0 2em;
        color: #deddd5;
        font-size: 19px;
        line-height: 1.95;
        font-weight: 500;
      }

      .ins-notion-content .notion-title,
      .ins-notion-content .notion-page-icon-wrapper {
        display: none !important;
      }

      .ins-notion-content .notion-page {
        width: 100% !important;
        padding: 0 !important;
        background: transparent !important;
      }

      .ins-notion-content .notion-page-content {
        width: 100% !important;
        max-width: none !important;
        padding: 0 !important;
      }

      .ins-notion-content p,
      .ins-notion-content .notion-text {
        color: #d2d5cf;
        font-size: 17.5px;
        line-height: 2;
      }

      .ins-notion-content h1,
      .ins-notion-content .notion-h1 {
        margin: 2.2em 0 0.82em;
        color: var(--ins-text);
        font-family: Georgia, "Songti SC", "STSong", serif;
        font-size: 38px;
        line-height: 1.34;
        letter-spacing: -0.016em;
      }

      .ins-notion-content h2,
      .ins-notion-content .notion-h2 {
        margin: 2.25em 0 0.82em;
        color: var(--ins-text);
        font-family: Georgia, "Songti SC", "STSong", serif;
        font-size: 32px;
        line-height: 1.38;
        letter-spacing: -0.014em;
      }

      .ins-notion-content h3,
      .ins-notion-content .notion-h3 {
        margin: 1.95em 0 0.72em;
        color: var(--ins-text);
        font-family: Georgia, "Songti SC", "STSong", serif;
        font-size: 23px;
        line-height: 1.45;
      }

      .ins-notion-content strong {
        color: var(--ins-text);
        font-weight: 650;
      }

      .ins-notion-content a {
        color: var(--ins-accent) !important;
        font-weight: 570;
      }

      .ins-notion-content blockquote,
      .ins-notion-content .notion-quote {
        margin: 2.2em 0 !important;
        padding: 21px 26px 21px 28px !important;
        border-left: 3px solid var(--ins-accent) !important;
        border-radius: 0 var(--ins-radius) var(--ins-radius) 0;
        background: rgba(49, 70, 80, 0.48);
        color: #dfe0da;
        font-size: 17px;
        line-height: 1.92;
      }

      .ins-notion-content figure,
      .ins-notion-content .notion-asset-wrapper {
        margin-top: 50px !important;
        margin-bottom: 50px !important;
      }

      .ins-notion-content img {
        border-radius: var(--ins-radius);
      }

      .ins-notion-content figcaption,
      .ins-notion-content .notion-asset-caption {
        margin-top: 13px !important;
        color: var(--ins-faint) !important;
        font-size: 13px !important;
        line-height: 1.68 !important;
        text-align: center;
        letter-spacing: 0.02em;
      }

      .ins-toc {
        position: sticky;
        top: 110px;
        padding-left: 22px;
        border-left: 1px solid var(--ins-line);
      }

      .ins-toc-label {
        margin-bottom: 14px;
        color: var(--ins-faint);
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.12em;
      }

      .ins-toc a {
        display: block;
        padding: 7px 0;
        color: var(--ins-muted) !important;
        font-size: 13px;
        line-height: 1.55;
      }

      .ins-toc a.is-sub {
        padding-left: 14px;
        font-size: 12.5px;
      }

      .ins-toc a:hover {
        color: var(--ins-accent) !important;
        text-decoration: none !important;
      }

      .ins-article-end {
        margin-top: 62px;
        padding-top: 32px;
        border-top: 1px solid var(--ins-line);
      }

      .ins-tag-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 34px;
      }

      .ins-tag {
        padding: 5px 11px;
        border: 1px solid rgba(237, 142, 172, 0.36);
        border-radius: 999px;
        color: var(--ins-accent) !important;
        font-size: 12px;
        line-height: 1.5;
      }

      .ins-post-nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 28px;
      }

      .ins-post-nav a {
        padding: 20px 22px;
        border: 1px solid var(--ins-line);
        border-radius: var(--ins-radius);
        background: rgba(43, 57, 66, 0.62);
        color: var(--ins-muted) !important;
        font-size: 12px;
        line-height: 1.55;
      }

      .ins-post-nav a:hover {
        background: var(--ins-surface);
        text-decoration: none !important;
      }

      .ins-post-nav strong {
        display: block;
        margin-top: 5px;
        color: var(--ins-text);
        font-family: Georgia, "Songti SC", "STSong", serif;
        font-size: 16px;
        line-height: 1.5;
      }

      .ins-post-nav a:last-child {
        text-align: right;
      }

      .ins-article-loading {
        max-width: 1080px;
        margin: 0 auto;
        padding: 100px 34px;
        color: var(--ins-faint);
      }

      @media (max-width: 1000px) {
        .ins-article-layout {
          grid-template-columns: 1fr;
          gap: 0;
        }

        .ins-toc {
          display: none;
        }
      }

      @media (max-width: 760px) {
        .ins-article-header {
          padding: 56px 20px 36px;
        }

        .ins-article-title {
          font-size: 40px;
        }

        .ins-article-layout {
          padding: 6px 20px 82px;
        }

        .ins-article-body,
        .ins-notion-content p,
        .ins-notion-content .notion-text {
          font-size: 16.5px;
          line-height: 1.94;
        }

        .ins-article-lead {
          font-size: 18px;
        }

        .ins-notion-content h1,
        .ins-notion-content .notion-h1 {
          font-size: 32px;
        }

        .ins-notion-content h2,
        .ins-notion-content .notion-h2 {
          font-size: 28px;
        }

        .ins-notion-content h3,
        .ins-notion-content .notion-h3 {
          font-size: 21px;
        }

        .ins-post-nav {
          grid-template-columns: 1fr;
        }

        .ins-post-nav a:last-child {
          text-align: left;
        }
      }
    `}</style>
  )
}
