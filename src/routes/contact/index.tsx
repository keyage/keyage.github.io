import { component$ } from "@builder.io/qwik";
import { LuArrowLeft } from "@qwikest/icons/lucide";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen flex items-center justify-center px-4">
      <main class="max-w-xl w-full" style="view-transition-name: main-content">
        <div class="text-center space-y-8">
          <div class="text-left">
            <button
              onClick$={() => history.back()}
              class="inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition-opacity"
              style="color: var(--color-text-secondary)"
            >
              <LuArrowLeft class="text-base" />
              back
            </button>
          </div>

          <div class="space-y-4">
            <h1
              class="indie-flower-regular text-5xl"
              style="color: var(--color-text-primary); view-transition-name: name"
            >
              get in touch
            </h1>
            <div
              class="h-px w-16 mx-auto opacity-30"
              style="background: var(--color-text-primary)"
            />
          </div>

          <div class="space-y-6">
            <p class="text-md" style="color: var(--color-text-secondary)">
              feel free to reach out about anything - projects, ideas, or just
              to say hi
            </p>

            <div class="space-y-4">
              <a
                href="mailto:keircn@proton.me"
                class="block p-4 rounded-lg border hover:bg-accent hover:bg-opacity-10 hover:-translate-y-0.5 text-center transition-all duration-300"
                style="border-color: var(--color-border-primary); background: var(--color-bg-primary)"
              >
                <div
                  class="font-medium"
                  style="color: var(--color-text-primary)"
                >
                  keircn@proton.me
                </div>
                <div
                  class="text-sm mt-1"
                  style="color: var(--color-text-tertiary)"
                >
                  email
                </div>
              </a>

              <div class="grid grid-cols-2 gap-4">
                <a
                  href="https://codeberg.org/keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 rounded-lg border hover:bg-accent hover:bg-opacity-10 hover:-translate-y-0.5 text-center transition-all duration-300"
                  style="border-color: var(--color-border-primary); background: var(--color-bg-primary)"
                >
                  <div
                    class="font-medium"
                    style="color: var(--color-text-primary)"
                  >
                    codeberg
                  </div>
                  <div
                    class="text-sm mt-1"
                    style="color: var(--color-text-tertiary)"
                  >
                    @keys
                  </div>
                </a>

                <a
                  href="https://x.com/keyages"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 rounded-lg border hover:bg-accent hover:bg-opacity-10 hover:-translate-y-0.5 text-center transition-all duration-300"
                  style="border-color: var(--color-border-primary); background: var(--color-bg-primary)"
                >
                  <div
                    class="font-medium"
                    style="color: var(--color-text-primary)"
                  >
                    twitter
                  </div>
                  <div
                    class="text-sm mt-1"
                    style="color: var(--color-text-tertiary)"
                  >
                    @keyages
                  </div>
                </a>
              </div>
            </div>

            <p class="text-sm" style="color: var(--color-text-tertiary)">
              i usually respond the same day
            </p>
          </div>
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "contact - keiran",
  meta: [
    {
      name: "description",
      content: "get in touch with keiran",
    },
  ],
};
