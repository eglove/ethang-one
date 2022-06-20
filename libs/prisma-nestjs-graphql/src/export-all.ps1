$files = Get-ChildItem ./libs/prisma-nestjs-graphql/src/lib -Recurse -Filter *.ts

Clear-Content ./libs/prisma-nestjs-graphql/src/index.ts
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

  Add-Content -Path ./libs/prisma-nestjs-graphql/src/index.ts $exportString.Replace('.ts', '')
}
