import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.scss';
import ErrorBoundary from './components/errorBoundary';
import { routes } from './routes';
import './styles/globals.scss';

export function App() {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} Component={element} key={key} />
  ));

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>{routeComponents}</Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
