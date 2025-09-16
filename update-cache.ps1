$timestamp = Get-Date -Format "yyyyMMddHHmmss"
$indexFile = "index.html"
Write-Host "Actualizando cache busting..." -ForegroundColor Green
if (Test-Path $indexFile) {
    $content = Get-Content $indexFile -Raw -Encoding UTF8
    $updatedContent = $content -replace '\?v=\d{14}', "?v=$timestamp"
    [System.IO.File]::WriteAllText($indexFile, $updatedContent, [System.Text.UTF8Encoding]::new($false))
    Write-Host "Timestamp actualizado: $timestamp" -ForegroundColor Cyan
} else {
    Write-Host "Error: archivo no encontrado" -ForegroundColor Red
}
