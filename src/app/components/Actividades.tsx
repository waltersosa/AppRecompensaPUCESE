import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, MapPin, BookOpen, Music, Trophy, Sparkles } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { mockActividades } from '../data/mockData';
import { cn } from './ui/utils';

export function Actividades() {
  const [selectedTab, setSelectedTab] = useState('todas');

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'academica':
        return BookOpen;
      case 'cultural':
        return Music;
      case 'deportiva':
        return Trophy;
      default:
        return Sparkles;
    }
  };

  const getCategoriaColor = (categoria: string) => {
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

  const filteredActividades = selectedTab === 'todas'
    ? mockActividades
    : mockActividades.filter(a => a.categoria === selectedTab);

  const disponibles = filteredActividades.filter(a => a.estado === 'disponible');
  const registradas = filteredActividades.filter(a => a.estado === 'registrada');

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white pb-20">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052D9] text-white p-6 pb-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-1">Actividades</h1>
        <p className="text-sm text-white/80">
          ¡Participa y gana monedas! 🚀
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-4 space-y-4">
        {/* Filtros por Categoría con diseño mejorado */}
        <Card className="shadow-lg">
          <CardContent className="pt-4 pb-2">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 rounded-xl">
                <TabsTrigger 
                  value="todas"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-[#0052D9] data-[state=active]:text-white rounded-lg"
                >
                  Todas
                </TabsTrigger>
                <TabsTrigger 
                  value="academica"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-[#0052D9] data-[state=active]:text-white rounded-lg"
                >
                  📚
                </TabsTrigger>
                <TabsTrigger 
                  value="cultural"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-400 data-[state=active]:text-white rounded-lg"
                >
                  🎭
                </TabsTrigger>
                <TabsTrigger 
                  value="deportiva"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-success data-[state=active]:to-emerald-400 data-[state=active]:text-white rounded-lg"
                >
                  ⚽
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Actividades Disponibles */}
        {disponibles.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Disponibles
              </h2>
              <Badge variant="outline" className="border-primary/30">
                {disponibles.length}
              </Badge>
            </div>
            {disponibles.map(actividad => {
              const IconoCategoria = getCategoriaIcon(actividad.categoria);
              const gradientColor = getCategoriaColor(actividad.categoria);
              
              return (
                <Card 
                  key={actividad.id} 
                  className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/20 cursor-pointer overflow-hidden"
                >
                  <div className={cn('h-2 bg-gradient-to-r', gradientColor)}></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={cn(
                            'p-3 rounded-xl bg-gradient-to-br text-white shadow-lg',
                            gradientColor
                          )}>
                            <IconoCategoria className="w-5 h-5" />
                          </div>
                          <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] border-0 text-white font-bold">
                            +{actividad.monedas} monedas
                          </Badge>
                        </div>
                        <CardTitle className="text-base mb-2">{actividad.nombre}</CardTitle>
                        <CardDescription className="text-sm">
                          {actividad.descripcion}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/30 p-2 rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>
                        {new Date(actividad.fecha).toLocaleDateString('es-EC', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}
                      </span>
                    </div>
                    {actividad.ubicacion && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/30 p-2 rounded-lg">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{actividad.ubicacion}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Actividades Registradas */}
        {registradas.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-bold text-lg flex items-center gap-2">
                ✅ Ya participaste
              </h2>
              <Badge variant="outline" className="border-success/30 text-success">
                {registradas.length}
              </Badge>
            </div>
            {registradas.map(actividad => {
              const IconoCategoria = getCategoriaIcon(actividad.categoria);
              const gradientColor = getCategoriaColor(actividad.categoria);
              
              return (
                <Card key={actividad.id} className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
                  <div className="h-1 bg-gradient-to-r from-success to-emerald-400"></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={cn(
                            'p-2.5 rounded-xl bg-gradient-to-br text-white shadow-md',
                            gradientColor
                          )}>
                            <IconoCategoria className="w-4 h-4" />
                          </div>
                          <Badge className="bg-success text-success-foreground font-bold">
                            Completada ✓
                          </Badge>
                        </div>
                        <CardTitle className="text-base">{actividad.nombre}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(actividad.fecha).toLocaleDateString('es-EC', {
                          day: 'numeric',
                          month: 'long',
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {filteredActividades.length === 0 && (
          <Card className="border-2 border-dashed">
            <CardContent className="py-16 text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-lg font-semibold mb-2">No hay actividades aquí</p>
              <p className="text-sm text-muted-foreground">
                Pronto habrá nuevas oportunidades 🎯
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
