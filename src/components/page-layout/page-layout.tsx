import { component$, Slot } from "@builder.io/qwik";
import { LuArrowLeft } from "@qwikest/icons/lucide";

interface PageLayoutProps {
  showBackButton?: boolean;
  onBackClick$?: () => void;
}

export default component$<PageLayoutProps>(
  ({ showBackButton = false, onBackClick$ }) => {
    return (
      <div class="min-h-screen flex items-center justify-center px-4">
        <main
          class="max-w-xl w-full"
          style="view-transition-name: main-content"
        >
          <div class="text-center space-y-8">
            {showBackButton && (
              <div class="text-left">
                <button
                  onClick$={onBackClick$}
                  class="inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  style="color: var(--color-text-secondary)"
                >
                  <LuArrowLeft class="text-base" />
                  back
                </button>
              </div>
            )}
            <Slot />
          </div>
        </main>
      </div>
    );
  },
);
