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

### 2. Cache Busting Dinámico con JavaScript
Se implementó un sistema de cache busting automático que usa JavaScript para generar timestamps únicos en cada carga de página:

```javascript
// Cache busting dinámico - se ejecuta al cargar la página
(function() {
    const timestamp = new Date().getTime();
    document.getElementById('main-css').href += '?v=' + timestamp;
    document.getElementById('favicon').href += '?v=' + timestamp;
    document.getElementById('shortcut-favicon').href += '?v=' + timestamp;
})();
```

## Ventajas de esta Implementación

### ✅ **Sin Scripts Externos**
- No requiere ejecutar scripts .ps1 o .bat
- No hay riesgo de corrupción de codificación UTF-8
- Funciona automáticamente en cada carga

### ✅ **Cache Busting Automático**
- Genera timestamps únicos en cada visita
- Fuerza descarga de archivos actualizados
- Compatible con todos los navegadores modernos

### ✅ **Preserva la Codificación**
- No modifica el archivo HTML original
- Mantiene intactos los caracteres especiales y tildes
- Sin riesgo de corrupción de UTF-8

## Workflow Simplificado

1. Realiza cambios en CSS, JS o HTML
2. Haz commit y push de los cambios
3. **¡Listo!** El cache busting es automático

## Verificación

Para verificar que el cache busting funciona:
1. Abre las herramientas de desarrollo del navegador (F12)
2. Ve a la pestaña Network
3. Recarga la página
4. Verifica que los archivos se descargan con timestamps únicos

## Notas

- El timestamp se genera usando `new Date().getTime()`
- Se aplica automáticamente a CSS, JS y favicon
- Compatible con todos los navegadores modernos
- No afecta el rendimiento de la página
