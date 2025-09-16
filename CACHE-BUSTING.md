# Cache Busting para FIFV 2025

## ¿Qué es Cache Busting?

El cache busting es una técnica que fuerza a los navegadores a descargar nuevas versiones de archivos CSS, JS e imágenes cuando se realizan cambios, evitando que los usuarios vean versiones antigas en caché.

## Implementación

Se han aplicado las siguientes estrategias:

### 1. Meta tags de control de caché
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta http-equiv="Last-Modified" content="Mon, 16 Sep 2024 12:00:00 GMT">
```

### 2. Versioning con timestamps
Todos los archivos estáticos incluyen un parámetro de versión:
- `styles.css?v=20240916120000`
- `animations.js?v=20240916120000`
- `menu.js?v=20240916120000`
- `favicon.ico?v=20240916120000`

## Scripts de Automatización

### Opción 1: Script Batch (Windows)
```bash
update-cache.bat
```

### Opción 2: Script PowerShell (Recomendado)
```powershell
.\update-cache.ps1
```

## Workflow Recomendado

1. Realiza cambios en CSS, JS o HTML
2. Ejecuta el script de cache busting: `.\update-cache.ps1`
3. Haz commit y push de los cambios
4. Los usuarios verán automáticamente la nueva versión

## Verificación

Para verificar que el cache busting funciona:
1. Abre las herramientas de desarrollo del navegador (F12)
2. Ve a la pestaña Network
3. Recarga la página
4. Verifica que los archivos se descargan con los nuevos timestamps

## Notas

- El timestamp se genera en formato `YYYYMMDDHHMMSS`
- Se aplica automáticamente a todos los archivos estáticos
- Compatible con todos los navegadores modernos
- No afecta el rendimiento de la página
