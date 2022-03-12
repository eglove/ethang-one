export const PROJECT_ROOT = `~/Projects/ethang`;
export const ETHANG_CLI_ROOT = `${PROJECT_ROOT}/apps/ethang`;
export const SAVED_FILES_ROOT = `${ETHANG_CLI_ROOT}/lib`;

export enum WebsocketKey {
  updateSoftware = 'Update Software',
  openLinks = 'Open Links',
  padRepo = 'Pad Repo',
  windowsUpdate = 'Update Windows',
  powershellModuleUpdate = 'Powershell Module Update',
  ubuntuUpdate = 'Update Ubuntu',
  clearDocker = 'Clear Docker',
}

export const commandSplitter = '-----';

export const chocoUpgrade = [
  `choco list -l -r --id-only | Out-File ${SAVED_FILES_ROOT}/installed-choco-packages.txt`,
  'choco upgrade all',
];

export const clearDocker = [
  'docker stop $(docker ps -a -q)',
  'docker rm $(docker ps -a -q) -f',
  'docker volume rm $(docker volume ls -q)',
  'docker rmi $(docker images -a -q) -f',
  'docker system prune -a -f',
];

export const financeLinks = [
  'https://www.payscale.com/login.aspx',
  'https://www.paypal.com/',
  'https://smile.amazon.com/gp/css/order-history?ie=UTF8&ref_=nav_youraccount_orders&',
  'https://docs.google.com/spreadsheets/d/1NRRzw3Ok7my5xRIG6AKKoBadOK3Sca4ZoMg2vhKHxoA/edit',
  'https://google.syf.com/login/',
  'https://themagnolia.residentportal.com/app/home',
  'https://www.ameren.com/',
  'https://www.chase.com/',
  'https://www.usaa.com/inet/ent_logon/Logon?redirectjsp=true',
  'https://www.lightstream.com/account',
  'https://www.wealthfront.com/',
  'https://www.lendingclub.com/',
];

export const morningLinks = [
  'https://mail.google.com/chat/u/1/#chat',
  'https://mail.google.com/mail/u/1/#inbox',
];

export const powershellModuleUpdate = [
  'Update-Module -AcceptLicense -Confirm',
  `Get-InstalledModule | Format-Table Name -HideTableHeaders | Out-File ${SAVED_FILES_ROOT}/installed-ps-modules.txt`,
  `(Get-Content ${SAVED_FILES_ROOT}/installed-ps-modules.txt) | Where-Object { $_.trim() -ne "" } | Set-Content ${SAVED_FILES_ROOT}/installed-ps-modules.txt`,
];

export const ubuntuUpdate = [
  `ubuntu run 'echo ${process.env.NX_WSL_PASSWORD ?? ''} | sudo -S apt update`,
  `sudo apt upgrade -y`,
  `sudo apt autoremove -y'`,
];

export const windowsUpdate = [
  'Install-Module PSWindowsUpdate',
  'Get-WindowsUpdate',
  'Install-WindowsUpdate -WindowsUpdate -AcceptAll',
  'Install-WindowsUpdate -MicrosoftUpdate -AcceptAll',
];
