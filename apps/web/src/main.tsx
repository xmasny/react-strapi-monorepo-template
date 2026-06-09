import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, NavigateOptions, RouterProvider, ToOptions } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient
  },
  defaultPreload: "intent"
});

declare module "@tanstack/react-router" {
  interface RouterConfig {
    href: ToOptions[ "to" ];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }

  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
