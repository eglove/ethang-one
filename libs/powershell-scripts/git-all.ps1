$commitMessage = Read-Host "Enter a commit message"

Set-Location ~/Projects/ethang-one
git add .
pnpm browserslist --update-db
npx nx affected --target=lint --fix --base=origin/master --head=HEAD

if ($?)
{
  git commit -m "$commitMessage"
  npx nx affected --target=build --base=origin/master --head=HEAD
} else {
  git reset
  Stop-Process
}

if ($?)
{
  npx nx affected --target=test --base=origin/master --head=HEAD
} else {
  git reset
  Stop-Process
}

if ($?)
{
  npx nx affected --target=e2e --base=origin/master --head=HEAD
} else {
  git reset
  Stop-Process
}

if ($?)
{
  npx --yes snyk test
} else {
  git reset
  Stop-Process
}

#git push
