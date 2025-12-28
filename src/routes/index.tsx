import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Key&apos;s website</h1>
    </>
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
