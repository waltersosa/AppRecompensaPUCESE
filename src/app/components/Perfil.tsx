import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { User, GraduationCap, Building2, Mail, LogOut, Award, Star, Zap, Trophy } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { mockUsuario, mockHistorial } from '../data/mockData';

export function Perfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const iniciales = mockUsuario.nombre
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const totalActividades = mockHistorial.length;
  const monedasPromedioActividad = Math.round(mockUsuario.monedasTotales / totalActividades);
  const nivelActual = Math.floor(mockUsuario.monedasTotales / 200) + 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white pb-20">
      {/* Header con gradiente y avatar destacado */}
      <div className="bg-gradient-to-br from-[#003DA5] via-[#0052D9] to-[#003DA5] text-white p-6 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
        <div className="relative">
          <h1 className="text-2xl font-bold">Mi Perfil</h1>
          <p className="text-sm text-white/80 mt-1">Tu información y logros 🌟</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-16 space-y-4">
        {/* Card de Perfil Principal */}
        <Card className="shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-accent to-accent/30 p-6">
            <div className="flex flex-col items-center">
              {/* Avatar grande con gradiente */}
              <div className="relative mb-4">
                <Avatar className="w-28 h-28 bg-gradient-to-br from-[#003DA5] to-[#0052D9] text-white border-4 border-white shadow-xl">
                  <AvatarFallback className="text-3xl font-bold bg-transparent">{iniciales}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold mb-1">{mockUsuario.nombre}</h2>
                <p className="text-sm text-muted-foreground">{mockUsuario.carrera}</p>
                <Badge className="mt-2 bg-gradient-to-r from-primary to-[#0052D9] border-0">
                  Nivel {nivelActual}
                </Badge>
              </div>

              {/* Stats en el perfil */}
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl font-extrabold text-[#F59E0B]">{mockUsuario.monedasTotales}</p>
                  <p className="text-xs text-muted-foreground">Monedas</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#0052D9] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl font-extrabold text-primary">{totalActividades}</p>
                  <p className="text-xs text-muted-foreground">Eventos</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-success to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl font-extrabold text-success">{monedasPromedioActividad}</p>
                  <p className="text-xs text-muted-foreground">Promedio</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Información Personal */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Información personal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#0052D9] rounded-xl flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Nombre Completo</p>
                <p className="font-semibold">{mockUsuario.nombre}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-success to-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Correo Institucional</p>
                <p className="font-semibold text-sm">{mockUsuario.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Carrera</p>
                <p className="font-semibold">{mockUsuario.carrera}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Facultad</p>
                <p className="font-semibold">{mockUsuario.facultad}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logros y Badges */}
        <Card className="shadow-lg bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-warning fill-warning/20" />
              Tus logros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border-2 border-success/20">
              <div className="text-4xl">🏆</div>
              <div className="flex-1">
                <p className="font-bold mb-1">Participante Activo</p>
                <p className="text-xs text-muted-foreground">Has completado más de 10 actividades</p>
              </div>
              <Badge className="bg-success text-success-foreground">
                Desbloqueado
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border-2 border-warning/20">
              <div className="text-4xl">⭐</div>
              <div className="flex-1">
                <p className="font-bold mb-1">Acumulador de Monedas</p>
                <p className="text-xs text-muted-foreground">Tienes más de 400 monedas acumuladas</p>
              </div>
              <Badge className="bg-warning text-warning-foreground">
                Desbloqueado
              </Badge>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/50 rounded-2xl border-2 border-dashed border-primary/30">
              <div className="text-4xl grayscale">🎯</div>
              <div className="flex-1">
                <p className="font-bold mb-1 text-muted-foreground">Máster de Eventos</p>
                <p className="text-xs text-muted-foreground">Completa 20 actividades para desbloquearlo</p>
              </div>
              <Badge variant="outline">
                Bloqueado
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Botón de Cerrar Sesión mejorado */}
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="w-full h-12 shadow-lg"
          size="lg"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Cerrar Sesión
        </Button>

        <p className="text-xs text-center text-muted-foreground px-4">
          ¿Necesitas ayuda? Escríbenos a <strong>bienestar@pucese.edu.ec</strong>
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
