import { component$, QRL } from "@builder.io/qwik";
import { Button } from "../button";

interface ContactCardProps {
  href?: string;
  title: string;
  subtitle?: string;
  target?: string;
  rel?: string;
  onClick$?: QRL<(e?: Event) => void>;
  fullWidth?: boolean;
}

export default component$<ContactCardProps>(
  ({ href, title, subtitle, target, rel, onClick$, fullWidth = false }) => {
    return (
      <Button
        href={href}
        target={target}
        rel={rel}
        onClick$={onClick$}
        style="color: var(--color-text-primary)"
        class={`${fullWidth ? "w-full" : "flex-1"} border border-gray-200 px-4 py-3 hover:bg-accent hover:bg-opacity-10 hover:-translate-y-0.5 transition-all duration-300`}
      >
        {title}
        {subtitle && (
          <span
            slot="right"
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style="color: var(--color-text-secondary)"
          >
            {subtitle}
          </span>
        )}
      </Button>
    );
  },
);
