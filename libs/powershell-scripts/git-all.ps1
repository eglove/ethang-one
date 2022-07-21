$commitMessage = Read-Host "Enter a commit message"

Set-Location ~/Projects/ethang-one
git add .
pnpm browserslist --update-db
npx nx affected --target=lint --fix --base=origin/master --head=HEAD
$?
git commit -m "$commitMessage"
npx nx affected --target=build --base=origin/master --head=HEAD
$?
npx nx affected --target=test --base=origin/master --head=HEAD
$?
npx nx affected --target=e2e --base=origin/master --head=HEAD
$?
npx --yes snyk test
$?
Write-Host 'done'
#git push
