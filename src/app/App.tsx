import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Login } from './components/Login';
import { Inicio } from './components/Inicio';
import { Actividades } from './components/Actividades';
import { RFIDScanner } from './components/RFIDScanner';
import { Puntos } from './components/Puntos';
import { Recompensas } from './components/Recompensas';
import { Perfil } from './components/Perfil';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta de Login */}
          <Route path="/" element={<Login />} />

          {/* Rutas de Estudiante */}
          <Route path="/estudiante/inicio" element={<Inicio />} />
          <Route path="/estudiante/actividades" element={<Actividades />} />
          <Route path="/estudiante/rfid" element={<RFIDScanner />} />
          <Route path="/estudiante/puntos" element={<Puntos />} />
          <Route path="/estudiante/recompensas" element={<Recompensas />} />
          <Route path="/estudiante/perfil" element={<Perfil />} />

          {/* Rutas de Administrador */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </>
  );
}
