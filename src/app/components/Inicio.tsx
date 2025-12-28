import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Coins, TrendingUp, Gift, Calendar, Zap, Star, Award } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { mockUsuario, mockActividades } from '../data/mockData';

export function Inicio() {
  const navigate = useNavigate();
  const ultimaActividad = mockActividades.find(a => a.estado === 'registrada');
  
  // Cálculo para barra de progreso hacia siguiente nivel
  const proximoNivel = 500;
  const progreso = (mockUsuario.puntosTotales / proximoNivel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white pb-20">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-br from-[#003DA5] via-[#0052D9] to-[#003DA5] text-white p-6 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm text-white/80 mb-1">¡Hola de nuevo! 👋</p>
              <h1 className="text-2xl font-bold">{mockUsuario.nombre.split(' ')[0]}</h1>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
            </div>
          </div>
          <p className="text-sm text-white/80">{mockUsuario.carrera}</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-24 space-y-4">
        {/* Card de Puntos Protagonista */}
        <Card className="bg-gradient-to-br from-[#F59E0B] via-[#FCD34D] to-[#F59E0B] text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardDescription className="text-white/90 text-sm mb-1">
                  Tus Puntos
                </CardDescription>
                <CardTitle className="text-6xl font-extrabold mb-3">
                  {mockUsuario.puntosTotales}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">+45 este mes</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Coins className="w-10 h-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Próximo nivel</span>
                <span className="text-sm font-bold">{proximoNivel} pts</span>
              </div>
              <Progress value={progreso} className="h-2 bg-white/30" />
              <p className="text-xs mt-2 text-white/80">
                ¡Solo {proximoNivel - mockUsuario.puntosTotales} puntos para el siguiente nivel! 🎯
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Última Actividad con Badge "Nuevo" */}
        {ultimaActividad && (
          <Card className="shadow-lg border-2 border-success/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="w-5 h-5 text-success fill-success/20" />
                  Última participación
                </CardTitle>
                <Badge className="bg-success text-success-foreground animate-pulse">
                  ¡Sumaste puntos!
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{ultimaActividad.nombre}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(ultimaActividad.fecha).toLocaleDateString('es-EC', {
                      day: 'numeric',
                      month: 'long',
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#F59E0B]">+{ultimaActividad.puntos}</div>
                  <p className="text-xs text-muted-foreground">puntos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Acciones Rápidas Mejoradas */}
        <div className="grid grid-cols-2 gap-3">
          <Card 
            className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-primary/10 bg-gradient-to-br from-white to-accent/30" 
            onClick={() => navigate('/estudiante/rfid')}
          >
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#003DA5] to-[#0052D9] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <p className="font-bold text-base mb-1">Registrar</p>
              <p className="text-xs text-muted-foreground">Escanea tu credencial</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-warning/20 bg-gradient-to-br from-white to-warning/10" 
            onClick={() => navigate('/estudiante/recompensas')}
          >
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <p className="font-bold text-base mb-1">Canjear</p>
              <p className="text-xs text-muted-foreground">Ver recompensas</p>
            </CardContent>
          </Card>
        </div>

        {/* Próximas Actividades con mejor diseño */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Próximas oportunidades
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/estudiante/actividades')}
                className="text-primary hover:text-primary"
              >
                Ver todas →
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockActividades
              .filter(a => a.estado === 'disponible')
              .slice(0, 3)
              .map(actividad => (
                <div 
                  key={actividad.id} 
                  className="flex items-start justify-between p-3 rounded-xl bg-accent/30 border border-accent-foreground/10 hover:bg-accent/50 transition-colors cursor-pointer"
                  onClick={() => navigate('/estudiante/actividades')}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{actividad.nombre}</h4>
                    <p className="text-xs text-muted-foreground">
                      📅 {new Date(actividad.fecha).toLocaleDateString('es-EC', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </p>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] border-0">
                    +{actividad.puntos}
                  </Badge>
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Mensaje Motivacional */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/50 border-primary/20">
          <CardContent className="py-4">
            <p className="text-center text-sm">
              <span className="font-bold text-primary">💪 ¡Sigue así!</span> Cada actividad te acerca a tus metas
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
