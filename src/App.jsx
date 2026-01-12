import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import GuiaDelInversor from './pages/GuiaDelInversor';
import Turismo from './pages/Turismo';
import SectorInmobiliario from './pages/SectorInmobiliario';
import Universidades from './pages/Universidades';
import InnovacionTecnologia from './pages/InnovacionTecnologia';
import Inversiones from './pages/Inversiones';
import Presentacion from './pages/Presentacion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/institucional" element={<Institucional />} />
      <Route path="/guia-del-inversor" element={<GuiaDelInversor />} />
      <Route path="/area-oportunidad/turismo" element={<Turismo />} />
      <Route path="/area-oportunidad/sector-inmobiliario" element={<SectorInmobiliario />} />
      <Route path="/area-oportunidad/universidades" element={<Universidades />} />
      <Route path="/area-oportunidad/innovacion-tecnologia" element={<InnovacionTecnologia />} />
      <Route path="/inversiones" element={<Inversiones />} />
      <Route path="/presentacion" element={<Presentacion />} />
    </Routes>
  );
}

export default App;

