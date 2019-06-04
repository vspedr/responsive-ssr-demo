import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { BreakpointProvider } from 'react-socks';
import './client.css';
import routes from './routes';

ensureReady(routes).then(data =>
  hydrate(
    <BreakpointProvider>
      <BrowserRouter>
        <After data={data} routes={routes} />
      </BrowserRouter>
    </BreakpointProvider>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
