import './styles/globals.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import {routes} from "./routes";
export function App() {


  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} Component={element} key={key} />
  ));  

return (
<BrowserRouter>
    
            <Routes>{routeComponents}</Routes>
       
    </BrowserRouter>
  )
}