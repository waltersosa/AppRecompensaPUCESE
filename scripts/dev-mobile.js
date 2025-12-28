import { spawn } from 'child_process';
import os from 'os';
import qrcode from 'qrcode-terminal';
import chalk from 'chalk';

// Obtener la IP local
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Saltar direcciones internas y no IPv4
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const PORT = 5173;
const ip = getLocalIP();
const url = `http://${ip}:${PORT}`;

console.log('\n');
console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log(chalk.cyan.bold('  📱  PUCESE Incentivos - Modo Móvil'));
console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log('\n');

console.log(chalk.green('✓'), chalk.white('Servidor iniciando...'));
console.log('\n');

// Iniciar el servidor de Vite
const vite = spawn('npm', ['run', 'dev'], {
  shell: true,
  stdio: 'inherit'
});

// Esperar un poco para que Vite inicie
setTimeout(() => {
  console.log('\n');
  console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(chalk.yellow.bold('  📲  Escanea este QR con tu móvil:'));
  console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log('\n');
  
  // Generar QR
  qrcode.generate(url, { small: true }, (qr) => {
    console.log(qr);
  });
  
  console.log('\n');
  console.log(chalk.white('  O abre manualmente en tu navegador móvil:'));
  console.log(chalk.blue.bold(`  ${url}`));
  console.log('\n');
  console.log(chalk.gray('  Local:   '), chalk.cyan(`http://localhost:${PORT}`));
  console.log(chalk.gray('  Network: '), chalk.cyan(url));
  console.log('\n');
  console.log(chalk.yellow('  ⚠️  Asegúrate de estar conectado a la misma red WiFi'));
  console.log('\n');
  console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(chalk.green('  ✨ ¡Listo! Abre la cámara de tu móvil y escanea'));
  console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log('\n');
}, 3000);

vite.on('close', (code) => {
  console.log(chalk.red('\n✕ Servidor detenido'));
  process.exit(code);
});

// Manejar Ctrl+C
process.on('SIGINT', () => {
  vite.kill('SIGINT');
  process.exit(0);
});

