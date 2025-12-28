import { spawn } from 'child_process';
import chalk from 'chalk';
import path from 'path';

console.log('\n');
console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log(chalk.cyan.bold('  📦  Construyendo APK para Android'));
console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log('\n');

async function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      cwd: cwd,
      shell: true,
      stdio: 'inherit'
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    process.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  try {
    // Paso 1: Build de la web app
    console.log(chalk.yellow('📝 Paso 1/3: Construyendo app web...'));
    console.log('\n');
    await runCommand('npm', ['run', 'build'], process.cwd());
    console.log('\n');
    console.log(chalk.green('✓ App web construida'));
    console.log('\n');

    // Paso 2: Sincronizar con Capacitor
    console.log(chalk.yellow('🔄 Paso 2/3: Sincronizando con Android...'));
    console.log('\n');
    await runCommand('npx', ['cap', 'sync', 'android'], process.cwd());
    console.log('\n');
    console.log(chalk.green('✓ Sincronización completada'));
    console.log('\n');

    // Paso 3: Construir APK
    console.log(chalk.yellow('🔨 Paso 3/3: Construyendo APK...'));
    console.log(chalk.gray('   (Esto puede tardar 1-2 minutos)'));
    console.log('\n');
    
    const androidPath = path.join(process.cwd(), 'android');
    const gradlew = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
    
    await runCommand(gradlew, ['assembleDebug'], androidPath);
    
    console.log('\n');
    console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    console.log(chalk.green.bold('  ✨ ¡APK construido exitosamente!'));
    console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    console.log('\n');
    console.log(chalk.white('  📍 Tu APK está en:'));
    console.log(chalk.blue('     android/app/build/outputs/apk/debug/app-debug.apk'));
    console.log('\n');
    console.log(chalk.yellow('  🚀 Próximos pasos:'));
    console.log(chalk.white('     npm run emulator  → Ver en emulador'));
    console.log(chalk.white('     npm run install:device  → Instalar en móvil físico'));
    console.log('\n');

  } catch (error) {
    console.log('\n');
    console.log(chalk.red('❌ Error al construir el APK:'));
    console.log(chalk.yellow(error.message));
    console.log('\n');
    console.log(chalk.yellow('💡 Soluciones posibles:'));
    console.log(chalk.white('   1. Asegúrate de haber ejecutado: npm run add:android'));
    console.log(chalk.white('   2. Verifica que Android Studio esté instalado'));
    console.log(chalk.white('   3. Verifica la variable ANDROID_HOME'));
    console.log('\n');
    process.exit(1);
  }
}

main();

