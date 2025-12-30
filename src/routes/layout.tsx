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

        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation-duration: 0.4s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        ::view-transition-old(name),
        ::view-transition-new(name) {
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        ::view-transition-old(main-content),
        ::view-transition-new(main-content) {
          animation-duration: 0.5s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fade-from-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-to-left {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        ::view-transition-new(root) {
          animation: fade-from-right 0.4s ease-out;
        }

        ::view-transition-old(root) {
          animation: fade-to-left 0.4s ease-out;
        }

        ::view-transition-old(name),
        ::view-transition-new(name) {
          mix-blend-mode: normal;
        }

        ::view-transition-new(name) {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
