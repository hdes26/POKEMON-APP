import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './styles/globals.css'
import Home from './components/templates/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
