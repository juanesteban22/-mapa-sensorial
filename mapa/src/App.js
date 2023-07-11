import './App.css';
import React from 'react';
import FormularioMapa from './componentes/form';
import  Mapa  from './componentes/mapa';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <FormularioMapa/>,
        errorElement: <h1>Error</h1>
    },
    {
        path: "/Mapa",
        element: <Mapa/>,
        errorElement: <h1>Error</h1>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
