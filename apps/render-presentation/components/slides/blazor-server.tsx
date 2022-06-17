import { NextImageContainer } from '@ethang/react-components';

export function BlazorServer(): JSX.Element {
  return (
    <>
      <h1>SignalR</h1>
      <NextImageContainer
        image={{
          altText: 'Blazor Server',
          height: 461,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655486860/hidden/presentation/blazor-server.png',
          width: 707,
        }}
      />
      <ul>
        <li>
          All UI updates, event handling, and JavaScript calls are handle by the
          server and streaming with a SignalR connection. (Even button clicks!)
        </li>
        <li>
          Works with .NET MAUI for building native cross-platform. (No embedded
          chromium.)
        </li>
        <li>
          Higher latency because every user interactions involves a network hop.
        </li>
        <li>If the network fails, the app stops working.</li>
        <li>
          Requires additional resources to handle more active clients connected
          to the server.
        </li>
        <li>Serverless deployments and CDN&apos;s aren&apos;t possible.</li>
      </ul>
    </>
  );
}
