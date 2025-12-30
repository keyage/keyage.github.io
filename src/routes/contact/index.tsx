import { component$, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import PageLayout from '~/components/page-layout';
import FlexibleGrid from '~/components/flexible-grid';
import ContactCard from '~/components/contact-card';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const navigate = useNavigate();

  return (
    <PageLayout showBackButton={true} onBackClick$={$(() => navigate(-1))}>
      <div class='space-y-4'>
        <h1
          class='indie-flower-regular text-5xl'
          style='color: var(--color-text-primary); view-transition-name: name'
        >
          get in touch
        </h1>
        <div
          class='h-px w-16 mx-auto opacity-30'
          style='background: var(--color-text-primary)'
        />
      </div>

      <div class='space-y-6'>
        <p class='text-md' style='color: var(--color-text-secondary)'>
          feel free to reach out about anything - projects, ideas, or just to
          say hi
        </p>

        <div class='space-y-4'>
          <ContactCard
            href='mailto:keircn@proton.me'
            title='email'
            subtitle='keircn@proton.me'
            fullWidth={true}
          />

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

          <ContactCard
            href='https://discord.com/users/1230319937155760131'
            title='discord'
            subtitle='@keyages'
            fullWidth={true}
          />

          <FlexibleGrid layout='half'>
            <ContactCard
              href='https://anilist.co/user/keiran'
              title='anilist'
              subtitle='@keiran'
              target='_blank'
              rel='noopener noreferrer'
            />
            <ContactCard
              href='https://vndb.org/u320922'
              title='vndb'
              subtitle='@q4ow'
              target='_blank'
              rel='noopener noreferrer'
            />
          </FlexibleGrid>
        </div>

        <p class='text-sm' style='color: var(--color-text-tertiary)'>
          i usually respond the same day
        </p>
      </div>
    </PageLayout>
  );
});

export const head: DocumentHead = {
  title: 'contact - keiran',
  meta: [
    {
      name: 'description',
      content: 'get in touch with keiran',
    },
  ],
};
