import { spawn, exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);

console.log('\n');
console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log(chalk.cyan.bold('  📱  PUCESE Incentivos - Emulador Android'));
console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log('\n');

async function listEmulators() {
  try {
    const { stdout } = await execAsync('emulator -list-avds');
    const emulators = stdout.trim().split('\n').filter(e => e);
    return emulators;
  } catch (error) {
    return [];
  }
}

async function isEmulatorRunning() {
  try {
    const { stdout } = await execAsync('adb devices');
    return stdout.includes('emulator-');
  } catch (error) {
    return false;
  }
}

async function main() {
  console.log(chalk.yellow('🔍 Buscando emuladores disponibles...'));
  
  const emulators = await listEmulators();
  
  if (emulators.length === 0) {
    console.log('\n');
    console.log(chalk.red('❌ No se encontraron emuladores.'));
    console.log('\n');
    console.log(chalk.yellow('📖 Para crear un emulador:'));
    console.log(chalk.white('   1. Abre Android Studio'));
    console.log(chalk.white('   2. Ve a: Tools → Device Manager'));
    console.log(chalk.white('   3. Crea un nuevo Virtual Device'));
    console.log(chalk.white('   4. Vuelve a ejecutar este script'));
    console.log('\n');
    process.exit(1);
  }

  console.log(chalk.green(`✓ Encontrados ${emulators.length} emulador(es)`));
  console.log('\n');

  // Usar el primer emulador disponible
  const emulatorName = emulators[0];
  console.log(chalk.blue(`📱 Usando emulador: ${emulatorName}`));
  console.log('\n');

  // Verificar si ya hay un emulador corriendo
  if (await isEmulatorRunning()) {
    console.log(chalk.yellow('⚠️  Ya hay un emulador corriendo'));
    console.log(chalk.green('✓ Usando el emulador existente'));
  } else {
    console.log(chalk.yellow('🚀 Iniciando emulador...'));
    console.log(chalk.gray('   (Esto puede tardar 30-60 segundos)'));
    console.log('\n');

    // Iniciar emulador
    const emulator = spawn('emulator', ['-avd', emulatorName], {
      detached: true,
      stdio: 'ignore'
    });

    emulator.unref();

    // Esperar a que el emulador esté listo
    console.log(chalk.yellow('⏳ Esperando que el emulador esté listo...'));
    
    let ready = false;
    let attempts = 0;
    const maxAttempts = 60; // 60 segundos

    while (!ready && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        const { stdout } = await execAsync('adb shell getprop sys.boot_completed');
        if (stdout.trim() === '1') {
          ready = true;
        }
      } catch (error) {
        // Emulador aún no está listo
      }
      attempts++;
    }

    if (!ready) {
      console.log(chalk.red('❌ El emulador tardó demasiado en iniciarse'));
      console.log(chalk.yellow('   Intenta iniciarlo manualmente desde Android Studio'));
      process.exit(1);
    }
  }

  console.log('\n');
  console.log(chalk.green('✓ Emulador listo!'));
  console.log('\n');

  // Ahora instalar y ejecutar la app
  console.log(chalk.yellow('📦 Instalando la app en el emulador...'));
  console.log('\n');

  try {
    // Instalar APK
    const apkPath = 'android/app/build/outputs/apk/debug/app-debug.apk';
    await execAsync(`adb install -r "${apkPath}"`);
    
    console.log(chalk.green('✓ App instalada correctamente'));
    console.log('\n');

    // Ejecutar la app
    console.log(chalk.yellow('🚀 Abriendo la app...'));
    await execAsync('adb shell am start -n ec.edu.pucese.incentivos/.MainActivity');
    
    console.log('\n');
    console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    console.log(chalk.green.bold('  ✨ ¡Listo! Tu app está corriendo en el emulador'));
    console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    console.log('\n');
    console.log(chalk.white('  El emulador quedará abierto.'));
    console.log(chalk.gray('  Para cerrarlo, cierra la ventana del emulador.'));
    console.log('\n');

  } catch (error) {
    console.log('\n');
    console.log(chalk.red('❌ Error al instalar la app:'));
    console.log(chalk.yellow('   Asegúrate de haber ejecutado primero:'));
    console.log(chalk.cyan('   npm run build:apk'));
    console.log('\n');
    process.exit(1);
  }
}

main().catch(error => {
  console.error(chalk.red('Error:'), error.message);
  process.exit(1);
});

