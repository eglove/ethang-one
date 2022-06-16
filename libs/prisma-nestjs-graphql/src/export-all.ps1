$files = Get-ChildItem ./lib -Recurse -Filter *.ts

Clear-Content ./index.ts
foreach ($file in $files) {
  $directories = $file.FullName -split '\\'

  $libIndex = [array]::IndexOf($directories, 'lib');
  $length = $directories.Length
  $exportString = "export * from './";

  for($i = $libIndex; $i -lt $length; $i++) {
    if ($i -eq $length - 1)
    {
      $exportString += $directories[$i]
    }
    else
    {
      $withslash = $directories[$i]+"/"
      $exportString += $withslash
    }
  }

  $exportString += "';"

  Add-Content -Path ./index.ts $exportString.Replace('.ts', '')
}