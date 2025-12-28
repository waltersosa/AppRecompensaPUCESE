import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BookOpen, Music, Trophy, Coins, TrendingUp, Award, Zap } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { mockUsuario, mockHistorial } from '../data/mockData';
import { cn } from './ui/utils';

export function Monedas() {
  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'academica':
        return BookOpen;
      case 'cultural':
        return Music;
      case 'deportiva':
        return Trophy;
      default:
        return Coins;
    }
  };

  const getCategoriaGradient = (categoria: string) => {
    switch (categoria) {
      case 'academica':
        return 'from-primary to-[#0052D9]';
      case 'cultural':
        return 'from-purple-600 to-purple-400';
      case 'deportiva':
        return 'from-success to-emerald-400';
      default:
        return 'from-muted to-muted-foreground';
    }
  };

  // Agrupar historial por mes
  const historialPorMes = mockHistorial.reduce((acc, item) => {
    const fecha = new Date(item.fecha);
    const mesAnio = fecha.toLocaleDateString('es-EC', { year: 'numeric', month: 'long' });
    if (!acc[mesAnio]) {
      acc[mesAnio] = [];
    }
    acc[mesAnio].push(item);
    return acc;
  }, {} as Record<string, typeof mockHistorial>);

  // Cálculo para nivel
  const proximoNivel = 500;
  const progreso = (mockUsuario.monedasTotales / proximoNivel) * 100;
  const nivelActual = Math.floor(mockUsuario.monedasTotales / 200) + 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white pb-20">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052D9] text-white p-6 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
        <div className="relative">
          <h1 className="text-2xl font-bold mb-1">Mis Monedas</h1>
          <p className="text-sm text-white/80">Tu progreso y logros 🏆</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-24 space-y-4">
        {/* Saldo Total Destacado */}
        <Card className="bg-gradient-to-br from-[#F59E0B] via-[#FCD34D] to-[#F59E0B] text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-x-16 -translate-y-16"></div>
          <CardHeader className="relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-white/90 mb-2">Saldo Total</p>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-6xl font-extrabold">{mockUsuario.monedasTotales}</h2>
                  <span className="text-xl font-medium">monedas</span>
                </div>
              </div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <Coins className="w-12 h-12" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            {/* Indicador de nivel */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-bold">Nivel {nivelActual}</span>
                </div>
                <span className="text-sm">Nivel {nivelActual + 1} →</span>
              </div>
              <Progress value={progreso} className="h-3 bg-white/30" />
              <p className="text-xs mt-2 text-white/90">
                {proximoNivel - mockUsuario.monedasTotales} monedas para subir de nivel
              </p>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                <TrendingUp className="w-5 h-5 mx-auto mb-1" />
                <p className="text-2xl font-bold">+45</p>
                <p className="text-xs text-white/80">Este mes</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                <Zap className="w-5 h-5 mx-auto mb-1" />
                <p className="text-2xl font-bold">{mockHistorial.length}</p>
                <p className="text-xs text-white/80">Actividades</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumen por Categoría mejorado */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Por categoría
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {['academica', 'cultural', 'deportiva'].map(categoria => {
              const monedas = mockHistorial
                .filter(h => h.categoria === categoria)
                .reduce((sum, h) => sum + h.monedas, 0);
              const Icon = getCategoriaIcon(categoria);
              const gradient = getCategoriaGradient(categoria);
              const cantidad = mockHistorial.filter(h => h.categoria === categoria).length;
              const porcentaje = (monedas / mockUsuario.monedasTotales) * 100;

              return (
                <div key={categoria} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'p-2.5 rounded-xl bg-gradient-to-br text-white shadow-md',
                        gradient
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold capitalize">{categoria}</p>
                        <p className="text-xs text-muted-foreground">{cantidad} actividades</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-[#F59E0B]">{monedas}</p>
                      <p className="text-xs text-muted-foreground">{porcentaje.toFixed(0)}%</p>
                    </div>
                  </div>
                  <Progress value={porcentaje} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Historial Detallado */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-bold text-lg">Historial completo</h2>
            <Badge variant="outline" className="border-primary/30">
              {mockHistorial.length} registros
            </Badge>
          </div>
          
          {Object.entries(historialPorMes).map(([mesAnio, items]) => {
            const totalMes = items.reduce((sum, item) => sum + item.monedas, 0);
            
            return (
              <Card key={mesAnio} className="shadow-md">
                <CardHeader className="pb-3 bg-accent/30">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base capitalize font-bold">{mesAnio}</CardTitle>
                    <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] border-0 font-bold">
                      +{totalMes} monedas
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  {items.map(item => {
                    const Icon = getCategoriaIcon(item.categoria);
                    const gradient = getCategoriaGradient(item.categoria);
                    
                    return (
                      <div
                        key={item.id}
                        className="flex items-start justify-between border-b border-border pb-3 last:border-0 last:pb-0 hover:bg-accent/30 -mx-2 px-2 py-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <div className={cn(
                            'p-2 rounded-xl bg-gradient-to-br text-white shadow-md shrink-0',
                            gradient
                          )}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm mb-1">{item.actividadNombre}</p>
                            <p className="text-xs text-muted-foreground">
                              📅 {new Date(item.fecha).toLocaleDateString('es-EC', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-success text-success-foreground shrink-0 font-bold">
                          +{item.monedas}
                        </Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mensaje motivacional */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/50 border-primary/20">
          <CardContent className="py-4 text-center">
            <p className="text-sm">
              <span className="font-bold text-primary text-base">🎯 ¡Vas muy bien!</span>
              <br />
              <span className="text-muted-foreground">Sigue sumando para desbloquear más recompensas</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}

