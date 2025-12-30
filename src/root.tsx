import { component$, isDev, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, useLocation } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  const isBackSignal = useSignal(false);
  const previousPathSignal = useSignal('');
  const location = useLocation();

  useVisibleTask$(({ track }) => {
    track(() => location.url.pathname);
    
    const currentPath = location.url.pathname;
    const previousPath = previousPathSignal.value;
    
    if (previousPath && currentPath !== previousPath) {
      isBackSignal.value = currentPath.length < previousPath.length || 
                          (currentPath === '/' && previousPath !== '/');
    }
    
    previousPathSignal.value = currentPath;
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charset='utf-8' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap'
          rel='stylesheet'
        />
        {!isDev && (
          <link
            rel='manifest'
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang='en' data-transition-back={isBackSignal.value.toString()}>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
