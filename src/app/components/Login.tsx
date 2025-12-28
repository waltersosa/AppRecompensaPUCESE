import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, Sparkles } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'estudiante' | 'administrador'>('estudiante');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'estudiante') {
      navigate('/estudiante/inicio');
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003DA5] via-[#0052D9] to-[#003DA5] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative shadow-2xl">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#003DA5] to-[#0052D9] rounded-3xl flex items-center justify-center shadow-lg">
                <Shield className="w-14 h-14 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl bg-gradient-to-r from-[#003DA5] to-[#0052D9] bg-clip-text text-transparent">
              PUCESE Incentivos
            </CardTitle>
            <CardDescription className="mt-3 text-base">
              ¡Participa, acumula y canjea! 🎯
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="role" className="text-sm">¿Quién eres?</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={role === 'estudiante' ? 'default' : 'outline'}
                  onClick={() => setRole('estudiante')}
                  className={`w-full transition-all ${
                    role === 'estudiante'
                      ? 'bg-gradient-to-r from-[#003DA5] to-[#0052D9] shadow-lg scale-105'
                      : ''
                  }`}
                >
                  Estudiante
                </Button>
                <Button
                  type="button"
                  variant={role === 'administrador' ? 'default' : 'outline'}
                  onClick={() => setRole('administrador')}
                  className={`w-full transition-all ${
                    role === 'administrador'
                      ? 'bg-gradient-to-r from-[#003DA5] to-[#0052D9] shadow-lg scale-105'
                      : ''
                  }`}
                >
                  Admin
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Institucional</Label>
              <Input
                id="email"
                type="email"
                placeholder="tunombre@pucese.edu.ec"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-input-background border-border h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-input-background border-border h-12"
              />
            </div>

            <div className="text-xs text-muted-foreground bg-accent/50 p-4 rounded-xl border border-accent-foreground/10">
              <Shield className="w-4 h-4 inline mr-2 text-primary" />
              Tus datos están protegidos. Esta app no almacena información sensible.
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#003DA5] to-[#0052D9] hover:shadow-xl transition-all text-base"
            >
              Ingresar
            </Button>

            <p className="text-xs text-center text-muted-foreground pt-2">
              ¿Problemas para ingresar? Escríbenos a{' '}
              <span className="text-primary font-medium">bienestar@pucese.edu.ec</span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
