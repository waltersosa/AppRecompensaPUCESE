import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import {
  Users,
  Calendar,
  Award,
  TrendingUp,
  BarChart3,
  LogOut,
  Plus,
  Settings,
} from 'lucide-react';
import { mockActividades, mockRecompensas, mockHistorial } from '../data/mockData';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const totalEstudiantes = 245;
  const puntosOtorgados = mockHistorial.reduce((sum, h) => sum + h.puntos, 0);
  const actividadesActivas = mockActividades.filter(a => a.estado === 'disponible').length;
  const recompensasDisponibles = mockRecompensas.reduce((sum, r) => sum + r.disponible, 0);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-primary text-white p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Panel de Administración</h1>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Departamento de Bienestar Estudiantil
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Salir
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Métricas Generales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Estudiantes Activos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-primary">{totalEstudiantes}</p>
                  <p className="text-xs text-muted-foreground mt-1">registrados</p>
                </div>
                <Users className="w-12 h-12 text-primary opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Puntos Otorgados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-warning">{puntosOtorgados}</p>
                  <p className="text-xs text-muted-foreground mt-1">total</p>
                </div>
                <Award className="w-12 h-12 text-warning opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Actividades Activas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-success">{actividadesActivas}</p>
                  <p className="text-xs text-muted-foreground mt-1">en curso</p>
                </div>
                <Calendar className="w-12 h-12 text-success opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Recompensas Disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-purple-600">{recompensasDisponibles}</p>
                  <p className="text-xs text-muted-foreground mt-1">unidades</p>
                </div>
                <TrendingUp className="w-12 h-12 text-purple-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs de Gestión */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="actividades">Actividades</TabsTrigger>
            <TabsTrigger value="recompensas">Recompensas</TabsTrigger>
            <TabsTrigger value="reportes">Reportes</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Actividades Recientes</CardTitle>
                <CardDescription>Últimas actividades creadas y gestionadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockActividades.slice(0, 5).map(actividad => (
                    <div
                      key={actividad.id}
                      className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{actividad.nombre}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(actividad.fecha).toLocaleDateString('es-EC')} • {actividad.puntos} puntos
                        </p>
                      </div>
                      <Badge variant={actividad.estado === 'disponible' ? 'default' : 'secondary'}>
                        {actividad.estado}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actividades" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestión de Actividades</h2>
              <Button className="bg-primary">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Actividad
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {mockActividades.map(actividad => (
                    <div
                      key={actividad.id}
                      className="flex items-start justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{actividad.nombre}</h3>
                          <Badge variant="outline" className="text-xs">
                            {actividad.categoria}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {actividad.descripcion}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{new Date(actividad.fecha).toLocaleDateString('es-EC')}</span>
                          <span>{actividad.puntos} puntos</span>
                          {actividad.ubicacion && <span>{actividad.ubicacion}</span>}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recompensas" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestión de Recompensas</h2>
              <Button className="bg-primary">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Recompensa
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {mockRecompensas.map(recompensa => (
                    <div
                      key={recompensa.id}
                      className="flex items-start justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{recompensa.nombre}</h3>
                          <Badge variant="outline" className="text-xs">
                            {recompensa.categoria}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {recompensa.descripcion}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{recompensa.costoPuntos} puntos</span>
                          <span>{recompensa.disponible} disponibles</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reportes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reportes y Auditoría</CardTitle>
                <CardDescription>Análisis de participación y registros RFID</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Panel de reportes y estadísticas en desarrollo
                  </p>
                  <Button className="mt-4 bg-primary">
                    Generar Reporte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
