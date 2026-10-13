export const MotionStyle = () => {
  return (
    <style jsx global>{`
      .ins-page-transition {
        opacity: 1;
        transform: translateY(0);
        transition:
          opacity 260ms ease,
          transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform;
      }

      .ins-page-transition.is-entering {
        opacity: 0;
        transform: translateY(7px);
      }

      .ins-page-transition.is-entered {
        opacity: 1;
        transform: translateY(0);
      }

      .ins-page-transition.is-leaving {
        opacity: 0;
        transform: translateY(-5px);
      }

      .ins-slide {
        transform: translateX(5%);
        transition:
          opacity 560ms ease,
          transform 560ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform;
      }

      .ins-slide.active {
        opacity: 1;
        transform: translateX(0);
        z-index: 2;
      }

      .ins-slide.is-leaving {
        opacity: 0;
        transform: translateX(-5%);
        z-index: 1;
      }

      @media (prefers-reduced-motion: reduce) {
        .ins-page-transition,
        .ins-page-transition.is-entering,
        .ins-page-transition.is-entered,
        .ins-page-transition.is-leaving {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }

        .ins-slide,
        .ins-slide.active,
        .ins-slide.is-leaving {
          transform: none !important;
          transition: none !important;
        }
      }
    `}</style>
  )
}
