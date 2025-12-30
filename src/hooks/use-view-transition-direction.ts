import { $, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export function useViewTransitionDirection() {
  const previousPathSignal = useSignal<string>('');
  const isBackNavigationSignal = useSignal(false);
  
  const location = useLocation();

  useVisibleTask$(({ track }) => {
    track(() => location.url.pathname);
    
    const currentPath = location.url.pathname;
    const previousPath = previousPathSignal.value;
    
    if (previousPath && currentPath !== previousPath) {
      isBackNavigationSignal.value = currentPath.length < previousPath.length || 
                                   (currentPath === '/' && previousPath !== '/');
    }
    
    previousPathSignal.value = currentPath;
  });

  const getViewTransitionClass = $((baseClass: string) => {
    return isBackNavigationSignal.value ? `${baseClass}--back` : `${baseClass}--forward`;
  });

  return {
    isBackNavigation: isBackNavigationSignal,
    getViewTransitionClass,
  };
}