@echo off
REM Script para actualizar el cache busting timestamp en index.html
REM Genera un timestamp en formato YYYYMMDDHHMMSS

for /f "tokens=1-6 delims=/: " %%a in ('echo %date% %time%') do (
    set datestr=%%c%%a%%b
    set timestr=%%d%%e%%f
)

REM Remover espacios del timestamp
set timestr=%timestr: =0%
set timestr=%timestr:~0,6%

set timestamp=%datestr%%timestr%

echo Actualizando cache busting con timestamp: %timestamp%

REM Actualizar el archivo index.html reemplazando el timestamp anterior
powershell -Command "(gc index.html) -replace 'v=\d{14}', 'v=%timestamp%' | Out-File -encoding UTF8 index.html"

echo Cache busting actualizado exitosamente!
echo Timestamp aplicado: %timestamp%
pause
