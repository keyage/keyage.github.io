import { component$ } from '@builder.io/qwik';
import { LuMapPin, LuSprout, LuCoffee } from '@qwikest/icons/lucide';
import PageLayout from '~/components/page-layout';
import FlexibleGrid from '~/components/flexible-grid';
import ContactCard from '~/components/contact-card';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <PageLayout>
      <h1
        class='indie-flower-regular text-5xl'
        style='color: var(--color-text-primary); view-transition-name: name'
      >
        Keiran
      </h1>

      <div class='space-y-4'>
        <p
          class='text-lg leading-relaxed'
          style='color: var(--color-text-secondary)'
        >
          i build things for the web. mostly code, sometimes design.
        </p>
        <p
          class='text-base leading-relaxed opacity-80'
          style='color: var(--color-text-tertiary)'
        >
          currently working on Android apps, among other things
        </p>
      </div>

      <div class='space-y-4'>
        <FlexibleGrid layout='half'>
          <ContactCard
            href='https://codeberg.org/keys'
            title='codeberg'
            subtitle='@keys'
            target='_blank'
            rel='noopener noreferrer'
          />
          <ContactCard
            href='https://x.com/keyages'
            title='twitter'
            subtitle='@keyages'
            target='_blank'
            rel='noopener noreferrer'
          />
        </FlexibleGrid>

        <ContactCard href='/contact' title='get in touch' fullWidth={true} />
      </div>

      <div
        class='pt-8 border-t'
        style='border-color: var(--color-border-secondary)'
      >
        <p
          class='text-sm flex items-center justify-center gap-4'
          style='color: var(--color-text-tertiary)'
        >
          <span class='flex items-center gap-1'>
            <LuMapPin class='text-base' />
            United Kingdom
          </span>
          <span class='flex items-center gap-1'>
            <LuSprout class='text-base' />
            learning kotlin
          </span>
          <span class='flex items-center gap-1'>
            <LuCoffee class='text-base' />I love coffee
          </span>
        </p>
      </div>
    </PageLayout>
  );
});

export const head: DocumentHead = {
  title: "Key's Website",
  meta: [
    {
      name: 'description',
      content: 'meow',
    },
  ],
};
