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
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }

        ::view-transition-old(name),
        ::view-transition-new(name) {
          animation-duration: 0.8s;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        ::view-transition-old(main-content),
        ::view-transition-new(main-content) {
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }

        @keyframes slide-from-right {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes slide-to-left {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
            filter: blur(2px);
          }
        }

        @keyframes slide-from-left {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes slide-to-right {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
            filter: blur(2px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-out-down {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
        }

        ::view-transition-new(root) {
          animation: slide-from-right 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          z-index: 2;
        }

        ::view-transition-old(root) {
          animation: slide-to-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          z-index: 1;
        }

        ::view-transition-old(name),
        ::view-transition-new(name) {
          mix-blend-mode: normal;
        }

        ::view-transition-new(name) {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          z-index: 2;
        }

        ::view-transition-old(name) {
          animation: fade-out-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          z-index: 1;
        }

        ::view-transition-new(main-content) {
          animation: slide-from-right 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          z-index: 2;
        }

        ::view-transition-old(main-content) {
          animation: slide-to-left 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          z-index: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          ::view-transition-group(*),
          ::view-transition-old(*),
          ::view-transition-new(*) {
            animation: none !important;
          }
        }
      `}
      />
      <Slot />
    </>
  );
});
