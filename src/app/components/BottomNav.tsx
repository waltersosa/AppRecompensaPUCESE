import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Coins, User } from 'lucide-react';
import { cn } from './ui/utils';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { to: '/estudiante/inicio', icon: Home, label: 'Inicio' },
    { to: '/estudiante/actividades', icon: Calendar, label: 'Actividades' },
    { to: '/estudiante/puntos', icon: Coins, label: 'Puntos' },
    { to: '/estudiante/perfil', icon: User, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-4">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  'flex flex-col items-center justify-center py-3 px-2 transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                <Icon className={cn('w-6 h-6', isActive && 'fill-primary/10')} />
                <span className="text-xs mt-1">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
