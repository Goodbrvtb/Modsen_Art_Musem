import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.scss';
import { routes } from './routes';
import './styles/globals.scss';
import ErrorBoundary from './tempcomponents/errorBoundary';

export function App() {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} Component={element} key={key} />
  ));

  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ErrorBoundary>
        <Routes>{routeComponents}</Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
