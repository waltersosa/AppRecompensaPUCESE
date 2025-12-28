export interface User {
  id: string;
  nombre: string;
  email: string;
  carrera: string;
  facultad: string;
  puntosTotales: number;
  role: 'estudiante' | 'administrador';
}

export interface Actividad {
  id: string;
  nombre: string;
  descripcion: string;
  puntos: number;
  fecha: string;
  categoria: 'academica' | 'cultural' | 'deportiva';
  estado: 'disponible' | 'registrada' | 'finalizada';
  ubicacion?: string;
}

export interface HistorialPunto {
  id: string;
  actividadId: string;
  actividadNombre: string;
  puntos: number;
  fecha: string;
  categoria: 'academica' | 'cultural' | 'deportiva';
}

export interface Recompensa {
  id: string;
  nombre: string;
  descripcion: string;
  costoPuntos: number;
  categoria: 'beca' | 'beneficio' | 'descuento';
  disponible: number;
  imagen?: string;
}

export interface RFIDEstado {
  estado: 'idle' | 'escaneando' | 'exito' | 'error' | 'duplicado';
  mensaje: string;
  actividadNombre?: string;
  puntosGanados?: number;
}
