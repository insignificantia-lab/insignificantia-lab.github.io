export const IntegrationOverrides = () => {
  return (
    <style jsx global>{`
      /*
       * Insignificantia. V1.6 integration overrides
       * Loaded last on purpose so NotionNext / react-notion-x styles
       * cannot silently win the cascade.
       */

      /* 1) HOME + ARTICLE / ARCHIVE RESULT cards: 900px and centered */
      #theme-insignificantia .ins-home-content .ins-post-list,
      #theme-insignificantia .ins-article-index,
      #theme-insignificantia .ins-article-index-list {
        width: 100% !important;
        max-width: 900px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      #theme-insignificantia .ins-home-content {
        width: 100% !important;
        max-width: 1400px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      #theme-insignificantia .ins-post-card,
      #theme-insignificantia .ins-article-list-card {
        width: 100% !important;
        max-width: 900px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      #theme-insignificantia .ins-home-end-actions {
        width: 100% !important;
        max-width: 900px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      /* 2) Article detail: the reading column stays geometrically centered */
      #theme-insignificantia .ins-article-header,
      #theme-insignificantia .ins-article-layout,
      #theme-insignificantia .ins-article-body {
        width: 100% !important;
        max-width: 810px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      #theme-insignificantia .ins-article-layout {
        position: relative !important;
        display: block !important;
      }

      /* Compact TOC button: it floats outside the centered 810px column. */
      #theme-insignificantia .ins-toc-dock {
        position: absolute !important;
        top: 8px !important;
        left: calc(100% + 22px) !important;
        width: 42px !important;
        z-index: 40 !important;
      }

      #theme-insignificantia .ins-toc-trigger {
        width: 42px !important;
        height: 42px !important;
        min-width: 42px !important;
        padding: 0 !important;
        border: 1px solid rgba(225, 231, 226, 0.18) !important;
        border-radius: 9px !important;
        background: rgba(32, 45, 53, 0.92) !important;
        color: #aeb9b9 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 4px !important;
      }

      #theme-insignificantia .ins-toc-trigger span {
        width: 16px !important;
        height: 1.5px !important;
        background: currentColor !important;
        border-radius: 999px !important;
      }

      #theme-insignificantia .ins-toc-trigger:hover,
      #theme-insignificantia .ins-toc-trigger[aria-expanded='true'] {
        color: #ed8eac !important;
        border-color: rgba(237, 142, 172, 0.62) !important;
        background: rgba(43, 57, 66, 0.96) !important;
      }

      #theme-insignificantia .ins-toc-popover {
        position: absolute !important;
        right: 52px !important;
        top: 0 !important;
        width: 260px !important;
        max-height: min(68vh, 560px) !important;
        overflow-y: auto !important;
        background: rgba(27, 39, 46, 0.98) !important;
        border: 1px solid rgba(225, 231, 226, 0.10) !important;
        border-radius: 9px !important;
        box-shadow: 0 16px 38px rgba(5,12,16,.25), 0 3px 10px rgba(5,12,16,.18) !important;
      }

      /* 3) ARTICLE and Archive-result list emphasis */
      #theme-insignificantia .ins-article-list-date,
      #theme-insignificantia .ins-read-more {
        color: #ed8eac !important;
      }

      #theme-insignificantia .ins-read-more {
        border-color: rgba(237, 142, 172, 0.5) !important;
      }

      /* 4) ARCHIVE card group is centered */
      #theme-insignificantia .ins-archive-page {
        width: calc(100% - 68px) !important;
        max-width: 980px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      #theme-insignificantia .ins-archive-grid {
        width: 100% !important;
        max-width: 980px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        justify-content: center !important;
      }

      /* 5) ARTICLE / ARCHIVE / ABOUT kicker */
      #theme-insignificantia .ins-page-kicker {
        color: #ed8eac !important;
      }

      /* 6) Quote: simple cream rule, no box */
      #theme-insignificantia .ins-notion-content blockquote,
      #theme-insignificantia .ins-notion-content .notion-quote,
      #theme-insignificantia .ins-notion-content .notion-quote-block {
        margin: 2.2em 0 !important;
        padding: 2px 0 2px 22px !important;
        border: 0 !important;
        border-left: 2px solid #f2eee4 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        color: #aeb9b9 !important;
        font-style: normal !important;
      }

      #theme-insignificantia .ins-notion-content blockquote *,
      #theme-insignificantia .ins-notion-content .notion-quote *,
      #theme-insignificantia .ins-notion-content .notion-quote-block * {
        color: inherit !important;
        background: transparent !important;
      }

      /* Callout: very close to the main background, not saturated blue */
      #theme-insignificantia .ins-notion-content .notion-callout {
        margin: 2.1em 0 !important;
        padding: 18px 20px !important;
        border: 1px solid rgba(225, 231, 226, 0.10) !important;
        border-radius: 9px !important;
        background: #25333b !important;
        box-shadow: none !important;
        color: #d1d5cf !important;
      }

      #theme-insignificantia .ins-notion-content .notion-callout > *,
      #theme-insignificantia .ins-notion-content .notion-callout .notion-text {
        color: inherit !important;
      }

      /* 7) Detail summary must never appear even if old markup survives. */
      #theme-insignificantia .ins-article-lead {
        display: none !important;
      }

      /* 8) Footer copy style remains quiet and centered inside the site shell. */
      #theme-insignificantia .ins-footer-inner {
        max-width: 1400px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      @media (max-width: 980px) {
        #theme-insignificantia .ins-toc-dock {
          display: none !important;
        }
      }

      @media (max-width: 760px) {
        /*
         * V1.9.1: use padding-box gutters instead of calc-width + margins.
         * This keeps the gutter inside the page box and is resilient to
         * upstream width / margin rules.
         */
        #theme-insignificantia .ins-article-index,
        #theme-insignificantia .ins-archive-page {
          width: 100% !important;
          max-width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 18px !important;
          padding-right: 18px !important;
          box-sizing: border-box !important;
        }

        #theme-insignificantia .ins-article-shell {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        #theme-insignificantia .ins-article-header,
        #theme-insignificantia .ins-article-layout {
          width: 100% !important;
          max-width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          box-sizing: border-box !important;
        }

        #theme-insignificantia .ins-article-index-list,
        #theme-insignificantia .ins-archive-grid,
        #theme-insignificantia .ins-article-body,
        #theme-insignificantia .ins-notion-content {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
        }

        #theme-insignificantia .ins-article-list-card,
        #theme-insignificantia .ins-archive-card,
        #theme-insignificantia .ins-notion-content .notion-callout,
        #theme-insignificantia .ins-notion-content blockquote,
        #theme-insignificantia .ins-notion-content .notion-quote,
        #theme-insignificantia .ins-notion-content .notion-quote-block {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
        }

        #theme-insignificantia .ins-notion-content img,
        #theme-insignificantia .ins-notion-content figure,
        #theme-insignificantia .ins-notion-content .notion-asset-wrapper {
          max-width: 100% !important;
        }
      }

      @media (max-width: 520px) {
        #theme-insignificantia .ins-article-list-card {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }

        #theme-insignificantia .ins-archive-card {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
      }
    `}</style>
  )
}
