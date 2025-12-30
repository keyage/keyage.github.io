import { component$ } from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={`
        ::view-transition {
          position: fixed;
          inset: 0;
        }

        ::view-transition-group(root) {
          isolation: isolate;
        }

        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation-duration: 0.8s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        ::view-transition-old(name),
        ::view-transition-new(name) {
          animation-duration: 0.9s;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        ::view-transition-old(main-content),
        ::view-transition-new(main-content) {
          animation-duration: 0.85s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes elegant-slide-from-right {
          0% {
            opacity: 0;
            transform: translateX(60px) scale(0.92);
            filter: blur(4px) brightness(0.8);
          }
          30% {
            opacity: 0.4;
            filter: blur(2px) brightness(0.9);
          }
          70% {
            transform: translateX(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0) brightness(1);
          }
        }

        @keyframes elegant-slide-to-left {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0) brightness(1);
          }
          30% {
            transform: translateX(5px) scale(1.02);
            filter: blur(1px) brightness(1.05);
          }
          100% {
            opacity: 0;
            transform: translateX(-60px) scale(0.92);
            filter: blur(4px) brightness(0.8);
          }
        }

        @keyframes elegant-slide-from-left {
          0% {
            opacity: 0;
            transform: translateX(-60px) scale(0.92);
            filter: blur(4px) brightness(0.8);
          }
          30% {
            opacity: 0.4;
            filter: blur(2px) brightness(0.9);
          }
          70% {
            transform: translateX(5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0) brightness(1);
          }
        }

        @keyframes elegant-slide-to-right {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0) brightness(1);
          }
          30% {
            transform: translateX(-5px) scale(1.02);
            filter: blur(1px) brightness(1.05);
          }
          100% {
            opacity: 0;
            transform: translateX(60px) scale(0.92);
            filter: blur(4px) brightness(0.8);
          }
        }

        @keyframes graceful-fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96) rotateX(-2deg);
            filter: blur(2px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-5px) scale(1.01) rotateX(1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }
        }

        @keyframes graceful-fade-out-down {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(5px) scale(1.01) rotateX(1deg);
          }
          100% {
            opacity: 0;
            transform: translateY(30px) scale(0.96) rotateX(-2deg);
            filter: blur(2px);
          }
        }

        @keyframes content-emerge {
          0% {
            opacity: 0;
            transform: perspective(1000px) translateZ(-100px) rotateY(2deg);
            filter: blur(3px) contrast(0.8);
          }
          40% {
            transform: perspective(1000px) translateZ(20px) rotateY(-1deg);
            filter: blur(1px) contrast(0.95);
          }
          80% {
            transform: perspective(1000px) translateZ(-10px) rotateY(0.5deg);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) translateZ(0) rotateY(0deg);
            filter: blur(0) contrast(1);
          }
        }

        @keyframes content-recede {
          0% {
            opacity: 1;
            transform: perspective(1000px) translateZ(0) rotateY(0deg);
            filter: blur(0) contrast(1);
          }
          40% {
            transform: perspective(1000px) translateZ(10px) rotateY(-1deg);
            filter: blur(1px) contrast(1.05);
          }
          100% {
            opacity: 0;
            transform: perspective(1000px) translateZ(-100px) rotateY(2deg);
            filter: blur(3px) contrast(0.8);
          }
        }

        ::view-transition-new(root) {
          animation: elegant-slide-from-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 2;
        }

        ::view-transition-old(root) {
          animation: elegant-slide-to-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 1;
        }

        [data-transition-back="true"] ::view-transition-new(root) {
          animation: elegant-slide-from-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        [data-transition-back="true"] ::view-transition-old(root) {
          animation: elegant-slide-to-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        ::view-transition-old(name),
        ::view-transition-new(name) {
          mix-blend-mode: normal;
        }

        ::view-transition-new(name) {
          animation: graceful-fade-in-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          z-index: 2;
        }

        ::view-transition-old(name) {
          animation: graceful-fade-out-down 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          z-index: 1;
        }

        ::view-transition-new(main-content) {
          animation: content-emerge 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 2;
        }

        ::view-transition-old(main-content) {
          animation: content-recede 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 1;
        }

        [data-transition-back="true"] ::view-transition-new(main-content) {
          animation: content-emerge 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        [data-transition-back="true"] ::view-transition-old(main-content) {
          animation: content-recede 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          ::view-transition-group(*),
          ::view-transition-old(*),
          ::view-transition-new(*) {
            animation: none !important;
          }
        }

        @keyframes shimmer-in {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes subtle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.01);
            opacity: 0.98;
          }
        }

        ::view-transition-new(root) {
          animation: elegant-slide-from-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards,
                     shimmer-in 0.8s ease-in-out forwards;
          z-index: 2;
        }

        ::view-transition-old(root) {
          animation: elegant-slide-to-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 1;
        }

        @media (prefers-color-scheme: dark) {
          @keyframes elegant-slide-from-right {
            0% {
              filter: blur(4px) brightness(1.2) saturate(1.1);
            }
            30% {
              filter: blur(2px) brightness(1.1) saturate(1.05);
            }
            100% {
              filter: blur(0) brightness(1) saturate(1);
            }
          }

          @keyframes elegant-slide-from-left {
            0% {
              filter: blur(4px) brightness(1.2) saturate(1.1);
            }
            30% {
              filter: blur(2px) brightness(1.1) saturate(1.05);
            }
            100% {
              filter: blur(0) brightness(1) saturate(1);
            }
          }

          @keyframes content-emerge {
            0% {
              filter: blur(3px) contrast(1.2) brightness(1.1) saturate(1.1);
            }
            40% {
              filter: blur(1px) contrast(1.1) brightness(1.05) saturate(1.05);
            }
            100% {
              filter: blur(0) contrast(1) brightness(1) saturate(1);
            }
          }
        }

        @media (min-width: 768px) {
          ::view-transition-new(root),
          ::view-transition-old(root) {
            animation-duration: 0.9s;
          }
          
          ::view-transition-new(name),
          ::view-transition-old(name) {
            animation-duration: 1s;
          }
          
          ::view-transition-new(main-content),
          ::view-transition-old(main-content) {
            animation-duration: 0.95s;
          }
        }

        @supports (backdrop-filter: blur()) {
          ::view-transition-new(root),
          ::view-transition-new(name),
          ::view-transition-new(main-content) {
            backdrop-filter: blur(0px);
            transition: backdrop-filter 0.3s ease-out;
          }
          
          ::view-transition-new(root):hover,
          ::view-transition-new(name):hover,
          ::view-transition-new(main-content):hover {
            backdrop-filter: blur(1px);
          }
        }
      `}
      />
      <Slot />
    </>
  );
});
