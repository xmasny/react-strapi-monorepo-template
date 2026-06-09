import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { TanStackRouterDevtoolsPanel } from '@tanstack/router-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { FormDevtoolsPanel } from '@tanstack/react-form-devtools'
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <TanStackDevtools
        plugins={[
          {
            name: 'TanStack Query',
            render: <ReactQueryDevtoolsPanel />,
          },
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          {
            name: 'TanStack Form',
            render: <FormDevtoolsPanel /> ,
          },
        ]}
      />
      <Outlet />
    </>
  );
}
