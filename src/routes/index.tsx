import { component$, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import {
  LuMapPin,
  LuSprout,
  LuCoffee,
  LuArrowRight,
} from "@qwikest/icons/lucide";
import { Button } from "~/components/button";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();

  const handleNavigation = $(async (e: Event, path: string) => {
    e.preventDefault();

    const doc = document as any;
    if (!doc.startViewTransition) {
      navigate(path);
      return;
    }

    const transition = doc.startViewTransition(() => {
      navigate(path);
    });

    try {
      await transition.finished;
    } catch (error) {
      console.log("View transition failed:", error);
    }
  });

  return (
    <div class="min-h-screen flex items-center justify-center px-4">
      <main class="max-w-xl w-full" style="view-transition-name: main-content">
        <div class="text-center space-y-8">
          <h1
            class="indie-flower-regular text-5xl"
            style="color: var(--color-text-primary); view-transition-name: name"
          >
            Keiran
          </h1>

          <div class="space-y-4">
            <p
              class="text-lg leading-relaxed"
              style="color: var(--color-text-secondary)"
            >
              i build things for the web. mostly code, sometimes design.
            </p>
            <p
              class="text-base leading-relaxed opacity-80"
              style="color: var(--color-text-tertiary)"
            >
              currently working on Android apps, among other things
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex gap-4">
              <Button
                href="https://codeberg.org/keys"
                target="_blank"
                rel="noopener noreferrer"
                style="color: var(--color-text-primary)"
                class="flex-1 border border-gray-200 px-4 py-3 hover:bg-accent hover:bg-opacity-10 hover:-translate-y-0.5 transition-all duration-300"
              >
                codeberg
                <span
                  slot="right"
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style="color: var(--color-text-secondary)"
                >
                  @keys
                </span>
              </Button>

              <Button
                href="https://x.com/keyages"
                target="_blank"
                rel="noopener noreferrer"
                style="color: var(--color-text-primary)"
                class="flex-1 border border-gray-200 px-4 py-3 hover:bg-accent hover:bg-opacity-10 hover:-translate-y-0.5 transition-all duration-300"
              >
                twitter
                <span
                  slot="right"
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style="color: var(--color-text-secondary)"
                >
                  @keyages
                </span>
              </Button>
            </div>

            <Button
              onClick$={($event) => handleNavigation($event!, "/contact")}
              style="color: var(--color-text-primary)"
              class="w-full border border-gray-200 px-4 py-3 hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
              rightIcon={
                <LuArrowRight
                  class="text-base button-right-icon"
                  style="color: var(--color-text-secondary)"
                />
              }
            >
              get in touch
            </Button>
          </div>

          <div
            class="pt-8 border-t"
            style="border-color: var(--color-border-secondary)"
          >
            <p
              class="text-sm flex items-center justify-center gap-4"
              style="color: var(--color-text-tertiary)"
            >
              <span class="flex items-center gap-1">
                <LuMapPin class="text-base" />
                United Kingdom
              </span>
              <span class="flex items-center gap-1">
                <LuSprout class="text-base" />
                learning kotlin
              </span>
              <span class="flex items-center gap-1">
                <LuCoffee class="text-base" />I love coffee
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Key's Website",
  meta: [
    {
      name: "description",
      content: "meow",
    },
  ],
};
