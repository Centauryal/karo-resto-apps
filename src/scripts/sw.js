import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import CONFIG from './globals/config';

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url:
        'https://fonts.googleapis.com/css?family=Poppins&display=swap',
      revision: 1,
    },
    {
      url:
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css',
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  },
);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new StaleWhileRevalidate({
    cacheName: CONFIG.CACHE_NAME,
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: CONFIG.CACHE_NAME,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);
