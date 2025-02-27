import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import ErrorBoundary from './Components/ErrorBoundary';
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
