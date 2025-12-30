import { component$, Slot } from '@builder.io/qwik';

interface FlexibleGridProps {
  layout?: 'full' | 'half' | 'mixed';
}

export default component$<FlexibleGridProps>(({ layout = 'full' }) => {
  const getGridClasses = () => {
    switch (layout) {
      case 'half':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
      case 'mixed':
        return 'space-y-4';
      default:
        return '';
    }
  };

  return (
    <div class={getGridClasses()}>
      <Slot />
    </div>
  );
});
