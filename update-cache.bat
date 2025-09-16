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
powershell -Command "$content = Get-Content 'index.html' -Raw -Encoding UTF8; $content = $content -replace 'v=\\d{14}', 'v=%timestamp%'; [System.IO.File]::WriteAllText('index.html', $content, [System.Text.UTF8Encoding]::new($false))"

echo Cache busting actualizado exitosamente!
echo Timestamp aplicado: %timestamp%
pause
