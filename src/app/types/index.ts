export interface User {
  id: string;
  nombre: string;
  email: string;
  carrera: string;
  facultad: string;
  monedasTotales: number;
  role: 'estudiante' | 'administrador';
}

export interface Actividad {
  id: string;
  nombre: string;
  descripcion: string;
  monedas: number;
  fecha: string;
  categoria: 'academica' | 'cultural' | 'deportiva';
  estado: 'disponible' | 'registrada' | 'finalizada';
  ubicacion?: string;
}

export interface HistorialMoneda {
  id: string;
  actividadId: string;
  actividadNombre: string;
  monedas: number;
  fecha: string;
  categoria: 'academica' | 'cultural' | 'deportiva';
}

export interface Recompensa {
  id: string;
  nombre: string;
  descripcion: string;
  costoMonedas: number;
  categoria: 'beca' | 'beneficio' | 'descuento';
  disponible: number;
  imagen?: string;
}
