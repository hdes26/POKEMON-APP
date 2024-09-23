import { router } from "./router";
import { RouterProvider } from 'react-router-dom';
import './styles/globals.css'

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
