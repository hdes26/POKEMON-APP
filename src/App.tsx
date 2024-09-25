import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './styles/globals.css'
import Home from './components/templates/Home/Home';
import PokemonDetails from './components/templates/PokemonDetails/PokemonDetails';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<PokemonDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
