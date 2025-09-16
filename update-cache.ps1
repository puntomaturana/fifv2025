# Script PowerShell para actualizar cache busting
# Uso: .\update-cache.ps1

$timestamp = Get-Date -Format "yyyyMMddHHmmss"
$indexFile = "index.html"

Write-Host "Actualizando cache busting en $indexFile..." -ForegroundColor Green
Write-Host "Nuevo timestamp: $timestamp" -ForegroundColor Yellow

if (Test-Path $indexFile) {
    # Leer el contenido del archivo
    $content = Get-Content $indexFile -Raw
    
    # Reemplazar todos los timestamps existentes con el nuevo
    $updatedContent = $content -replace '\?v=\d{14}', "?v=$timestamp"
    
    # Escribir el contenido actualizado de vuelta al archivo con codificación UTF-8 sin BOM
    [System.IO.File]::WriteAllText($indexFile, $updatedContent, [System.Text.UTF8Encoding]::new($false))
    
    Write-Host "✅ Cache busting actualizado exitosamente!" -ForegroundColor Green
    Write-Host "📅 Timestamp aplicado: $timestamp" -ForegroundColor Cyan
    
    # Mostrar las líneas que fueron modificadas
    $modifiedLines = $updatedContent -split "`n" | Where-Object { $_ -match "\?v=$timestamp" }
    if ($modifiedLines) {
        Write-Host "`n📝 Archivos con cache busting actualizado:" -ForegroundColor Magenta
        foreach ($line in $modifiedLines) {
            $trimmedLine = $line.Trim()
            if ($trimmedLine) {
                Write-Host "   $trimmedLine" -ForegroundColor Gray
            }
        }
    }
} else {
    Write-Host "❌ Error: No se encontró el archivo $indexFile" -ForegroundColor Red
}

Write-Host "`n💡 Tip: Ejecuta este script cada vez que hagas cambios a CSS o JS" -ForegroundColor Blue
