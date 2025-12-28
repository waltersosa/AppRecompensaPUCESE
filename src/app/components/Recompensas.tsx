import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ArrowLeft, Gift, GraduationCap, Ticket, Sparkles, Heart } from 'lucide-react';
import { mockRecompensas, mockUsuario } from '../data/mockData';
import { toast } from 'sonner';
import { cn } from './ui/utils';

export function Recompensas() {
  const navigate = useNavigate();
  const [selectedRecompensa, setSelectedRecompensa] = useState<typeof mockRecompensas[0] | null>(null);

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'beca':
        return GraduationCap;
      case 'beneficio':
        return Gift;
      case 'descuento':
        return Ticket;
      default:
        return Sparkles;
    }
  };

  const getCategoriaGradient = (categoria: string) => {
    switch (categoria) {
      case 'beca':
        return 'from-primary to-[#0052D9]';
      case 'beneficio':
        return 'from-success to-emerald-400';
      case 'descuento':
        return 'from-[#F59E0B] to-[#FCD34D]';
      default:
        return 'from-muted to-muted-foreground';
    }
  };

  const handleCanjear = () => {
    if (selectedRecompensa) {
      if (mockUsuario.puntosTotales >= selectedRecompensa.costoPuntos) {
        toast.success('¡Recompensa canjeada! 🎉', {
          description: `Has canjeado ${selectedRecompensa.nombre}. Revisa tu correo para más detalles.`,
        });
        setSelectedRecompensa(null);
      } else {
        toast.error('Puntos insuficientes 😔', {
          description: `Te faltan ${selectedRecompensa.costoPuntos - mockUsuario.puntosTotales} puntos más. ¡Sigue participando!`,
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white pb-6">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052D9] text-white p-6 pb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/estudiante/inicio')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">Recompensas</h1>
            <p className="text-sm text-white/80">
              Canjea lo que te ganaste 🎁
            </p>
          </div>
        </div>
        
        {/* Saldo de puntos en header */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/80 mb-1">Tienes disponibles</p>
              <p className="text-3xl font-extrabold">{mockUsuario.puntosTotales}</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-4 space-y-4">
        {/* Catálogo de Recompensas tipo tienda */}
        <div className="grid grid-cols-1 gap-4">
          {mockRecompensas.map(recompensa => {
            const Icon = getCategoriaIcon(recompensa.categoria);
            const gradient = getCategoriaGradient(recompensa.categoria);
            const puedesCanjear = mockUsuario.puntosTotales >= recompensa.costoPuntos;

            return (
              <Dialog key={recompensa.id}>
                <DialogTrigger asChild>
                  <Card 
                    className={cn(
                      'cursor-pointer transition-all duration-300 overflow-hidden',
                      puedesCanjear 
                        ? 'hover:shadow-2xl hover:scale-[1.02] border-2 border-transparent hover:border-primary/30' 
                        : 'opacity-60 grayscale'
                    )}
                    onClick={() => setSelectedRecompensa(recompensa)}
                  >
                    {/* Barra superior de categoría */}
                    <div className={cn('h-2 bg-gradient-to-r', gradient)}></div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        {/* Icono grande */}
                        <div className={cn(
                          'p-4 rounded-2xl bg-gradient-to-br text-white shadow-xl shrink-0',
                          gradient
                        )}>
                          <Icon className="w-8 h-8" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <CardTitle className="text-lg leading-tight">{recompensa.nombre}</CardTitle>
                            {puedesCanjear && (
                              <Heart className="w-5 h-5 text-destructive fill-destructive/20 animate-pulse" />
                            )}
                          </div>
                          <CardDescription className="text-sm line-clamp-2">
                            {recompensa.descripcion}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between bg-accent/50 rounded-xl p-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                          <span className="text-sm text-muted-foreground">Costo</span>
                        </div>
                        <Badge 
                          className={cn(
                            'font-bold text-base px-3 py-1',
                            puedesCanjear 
                              ? 'bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] border-0' 
                              : 'bg-muted text-muted-foreground'
                          )}
                        >
                          {recompensa.costoPuntos} pts
                        </Badge>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          {recompensa.disponible} disponibles
                        </span>
                        {!puedesCanjear && (
                          <span className="text-destructive font-medium">
                            Te faltan {recompensa.costoPuntos - mockUsuario.puntosTotales} pts
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{recompensa.nombre}</DialogTitle>
                    <DialogDescription className="pt-6 space-y-6">
                      {/* Icono grande centrado */}
                      <div className="flex justify-center">
                        <div className={cn(
                          'p-8 rounded-3xl bg-gradient-to-br text-white shadow-2xl',
                          gradient
                        )}>
                          <Icon className="w-16 h-16" />
                        </div>
                      </div>
                      
                      <p className="text-foreground text-base leading-relaxed">
                        {recompensa.descripcion}
                      </p>
                      
                      {/* Info en cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-accent to-accent/30 p-4 rounded-xl text-center border border-accent-foreground/10">
                          <p className="text-xs text-muted-foreground mb-1">Costo</p>
                          <p className="text-3xl font-extrabold text-[#F59E0B]">
                            {recompensa.costoPuntos}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">puntos</p>
                        </div>
                        <div className="bg-gradient-to-br from-accent to-accent/30 p-4 rounded-xl text-center border border-accent-foreground/10">
                          <p className="text-xs text-muted-foreground mb-1">Disponibles</p>
                          <p className="text-3xl font-extrabold text-primary">
                            {recompensa.disponible}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">unidades</p>
                        </div>
                      </div>

                      {!puedesCanjear && (
                        <div className="bg-gradient-to-r from-warning/10 to-warning/5 border-2 border-warning/30 rounded-xl p-4 text-center">
                          <p className="text-sm font-bold text-warning mb-1">
                            ¡Casi lo logras! 💪
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Solo te faltan <strong>{recompensa.costoPuntos - mockUsuario.puntosTotales} puntos</strong> para canjear esta recompensa
                          </p>
                        </div>
                      )}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="flex gap-3 mt-6">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setSelectedRecompensa(null)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      className={cn(
                        'flex-1 font-bold',
                        puedesCanjear
                          ? 'bg-gradient-to-r from-[#003DA5] to-[#0052D9] hover:shadow-xl'
                          : ''
                      )}
                      onClick={handleCanjear}
                      disabled={!puedesCanjear}
                    >
                      {puedesCanjear ? '¡Canjear ahora! 🎉' : 'Puntos insuficientes'}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* Información adicional mejorada */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/50 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-4 text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Tips para canjear
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-xl">🎯</span>
                <span>Las recompensas son <strong>personales</strong> y no se transfieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <span>Recibirás un <strong>correo</strong> con las instrucciones de uso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <span>Los puntos se <strong>descuentan al instante</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⏰</span>
                <span>Cada recompensa tiene su <strong>plazo de vigencia</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
