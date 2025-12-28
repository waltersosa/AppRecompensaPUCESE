@echo off
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   🔧 Configurando Variables de Entorno para Android
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

REM Detectar usuario actual
set USERNAME=%USERNAME%

REM Ruta típica del Android SDK
set ANDROID_SDK_ROOT=C:\Users\%USERNAME%\AppData\Local\Android\Sdk

echo 📍 Buscando Android SDK en: %ANDROID_SDK_ROOT%
echo.

if not exist "%ANDROID_SDK_ROOT%" (
    echo ❌ No se encontró Android SDK en la ubicación esperada.
    echo.
    echo 💡 Busca manualmente la carpeta del SDK:
    echo    1. Abre Android Studio
    echo    2. File ^> Settings ^> Appearance ^& Behavior ^> System Settings ^> Android SDK
    echo    3. Copia la ruta que aparece en "Android SDK Location"
    echo.
    pause
    exit /b 1
)

echo ✓ Android SDK encontrado!
echo.
echo 🔧 Configurando variables de entorno del sistema...
echo    (Requiere permisos de administrador)
echo.

REM Configurar ANDROID_HOME para el usuario
setx ANDROID_HOME "%ANDROID_SDK_ROOT%" >nul 2>&1
echo ✓ ANDROID_HOME = %ANDROID_SDK_ROOT%

REM Agregar al PATH del usuario
set NEW_PATH=%ANDROID_SDK_ROOT%\platform-tools;%ANDROID_SDK_ROOT%\emulator;%ANDROID_SDK_ROOT%\tools;%ANDROID_SDK_ROOT%\tools\bin

echo ✓ Agregando al PATH:
echo    - platform-tools
echo    - emulator
echo    - tools
echo.

REM Obtener PATH actual del usuario
for /f "tokens=2*" %%a in ('reg query "HKCU\Environment" /v PATH 2^>nul') do set CURRENT_PATH=%%b

REM Verificar si ya existe en el PATH
echo %CURRENT_PATH% | findstr /C:"%ANDROID_SDK_ROOT%\platform-tools" >nul
if errorlevel 1 (
    setx PATH "%CURRENT_PATH%;%NEW_PATH%" >nul 2>&1
    echo ✓ PATH actualizado
) else (
    echo ℹ️  Las rutas ya estaban en el PATH
)

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   ✨ ¡Configuración completada!
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ⚠️  IMPORTANTE: Debes cerrar y reabrir tu terminal
echo    para que los cambios surtan efecto.
echo.
echo 📝 Después de reabrir la terminal, verifica con:
echo    adb --version
echo    emulator -version
echo.
pause

