import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Radio, CheckCircle2, XCircle, AlertCircle, Sparkles } from 'lucide-react';
import { RFIDEstado } from '../types';
import { cn } from './ui/utils';

export function RFIDScanner() {
  const navigate = useNavigate();
  const [estadoRFID, setEstadoRFID] = useState<RFIDEstado>({
    estado: 'idle',
    mensaje: 'Acerca tu credencial al lector',
  });

  const simularEscaneo = () => {
    setEstadoRFID({
      estado: 'escaneando',
      mensaje: 'Detectando credencial...',
    });

    setTimeout(() => {
      const resultados: RFIDEstado[] = [
        {
          estado: 'exito',
          mensaje: '¡Genial! Asistencia registrada',
          actividadNombre: 'Conferencia de Innovación Tecnológica',
          puntosGanados: 50,
        },
        {
          estado: 'duplicado',
          mensaje: 'Ya registraste esta actividad',
          actividadNombre: 'Seminario de Emprendimiento',
        },
        {
          estado: 'error',
          mensaje: 'Ups, algo salió mal. Intenta de nuevo',
        },
      ];

      const resultado = resultados[Math.floor(Math.random() * resultados.length)];
      setEstadoRFID(resultado);

      if (resultado.estado === 'exito') {
        setTimeout(() => {
          navigate('/estudiante/inicio');
        }, 3000);
      }
    }, 2000);
  };

  const resetear = () => {
    setEstadoRFID({
      estado: 'idle',
      mensaje: 'Acerca tu credencial al lector',
    });
  };

  const getEstadoVisual = () => {
    switch (estadoRFID.estado) {
      case 'idle':
        return {
          icon: Radio,
          color: 'text-primary',
          bgColor: 'bg-gradient-to-br from-primary/10 to-primary/5',
          borderColor: 'border-primary/20',
          gradientRing: 'from-primary to-[#0052D9]',
        };
      case 'escaneando':
        return {
          icon: Radio,
          color: 'text-primary',
          bgColor: 'bg-gradient-to-br from-primary/10 to-primary/5',
          borderColor: 'border-primary/30',
          gradientRing: 'from-primary to-[#0052D9]',
          animate: true,
        };
      case 'exito':
        return {
          icon: CheckCircle2,
          color: 'text-success',
          bgColor: 'bg-gradient-to-br from-success/10 to-success/5',
          borderColor: 'border-success/30',
          gradientRing: 'from-success to-emerald-400',
        };
      case 'error':
        return {
          icon: XCircle,
          color: 'text-destructive',
          bgColor: 'bg-gradient-to-br from-destructive/10 to-destructive/5',
          borderColor: 'border-destructive/30',
          gradientRing: 'from-destructive to-red-400',
        };
      case 'duplicado':
        return {
          icon: AlertCircle,
          color: 'text-warning',
          bgColor: 'bg-gradient-to-br from-warning/10 to-warning/5',
          borderColor: 'border-warning/30',
          gradientRing: 'from-warning to-[#FCD34D]',
        };
    }
  };

  const visual = getEstadoVisual();
  const Icon = visual.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052D9] text-white p-4 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/estudiante/inicio')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Registro RFID</h1>
            <p className="text-sm text-white/80">Escanea tu credencial</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Área de Escaneo con efecto de pulso */}
        <Card className={cn(
          'border-2 border-dashed shadow-2xl overflow-hidden relative',
          visual.borderColor,
          estadoRFID.estado === 'escaneando' && 'animate-pulse'
        )}>
          {/* Anillo de gradiente animado para éxito */}
          {estadoRFID.estado === 'exito' && (
            <div className="absolute inset-0 bg-gradient-to-r from-success/20 to-emerald-400/20 animate-ping"></div>
          )}
          
          <CardContent className="py-20 text-center relative">
            {/* Círculo principal con gradiente */}
            <div className={cn(
              'w-40 h-40 rounded-full flex items-center justify-center mx-auto mb-8 relative',
              visual.bgColor
            )}>
              {/* Anillo exterior decorativo */}
              <div className={cn(
                'absolute inset-0 rounded-full bg-gradient-to-r opacity-30',
                visual.gradientRing,
                visual.animate && 'animate-spin'
              )}></div>
              
              {/* Icono */}
              <Icon
                className={cn(
                  'w-20 h-20 relative z-10',
                  visual.color,
                  visual.animate && 'animate-pulse'
                )}
              />

              {/* Sparkles para éxito */}
              {estadoRFID.estado === 'exito' && (
                <>
                  <Sparkles className="absolute top-2 right-2 w-6 h-6 text-warning animate-bounce" />
                  <Sparkles className="absolute bottom-2 left-2 w-5 h-5 text-warning animate-bounce delay-100" />
                </>
              )}
            </div>

            <h2 className={cn(
              'text-2xl font-bold mb-2',
              visual.color
            )}>
              {estadoRFID.mensaje}
            </h2>

            {estadoRFID.actividadNombre && (
              <div className="mt-8 p-6 bg-gradient-to-br from-accent to-accent/50 rounded-2xl border border-accent-foreground/10">
                <p className="text-sm text-muted-foreground mb-2">Actividad</p>
                <p className="font-bold text-lg mb-3">{estadoRFID.actividadNombre}</p>
                {estadoRFID.puntosGanados && (
                  <div className="bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] text-white rounded-xl p-4 shadow-lg">
                    <p className="text-sm opacity-90 mb-1">¡Puntos ganados!</p>
                    <p className="text-5xl font-extrabold">+{estadoRFID.puntosGanados}</p>
                    <p className="text-sm mt-2 opacity-90">🎉 ¡Sigue así!</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Botones de Acción */}
        {estadoRFID.estado === 'idle' && (
          <Button
            onClick={simularEscaneo}
            className="w-full h-14 bg-gradient-to-r from-[#003DA5] to-[#0052D9] hover:shadow-2xl transition-all text-lg font-bold"
            size="lg"
          >
            <Radio className="w-5 h-5 mr-2" />
            Iniciar Escaneo
          </Button>
        )}

        {(estadoRFID.estado === 'error' || estadoRFID.estado === 'duplicado') && (
          <div className="space-y-3">
            <Button
              onClick={resetear}
              className="w-full h-12 bg-gradient-to-r from-[#003DA5] to-[#0052D9]"
              size="lg"
            >
              Intentar Nuevamente
            </Button>
            <Button
              onClick={() => navigate('/estudiante/inicio')}
              variant="outline"
              className="w-full h-12"
            >
              Volver al Inicio
            </Button>
          </div>
        )}

        {/* Instrucciones mejoradas */}
        {estadoRFID.estado === 'idle' && (
          <Card className="bg-gradient-to-br from-accent to-accent/30 border-accent-foreground/10">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-4 text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                ¿Cómo funciona?
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <span><strong>Ubícate</strong> en el lugar del evento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💳</span>
                  <span><strong>Acerca</strong> tu credencial al lector RFID</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span><strong>¡Listo!</strong> Tus puntos se suman al instante</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
